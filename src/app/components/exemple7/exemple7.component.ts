import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { FormControl, FormGroup, AbstractControl, ValidationErrors, Validators, FormBuilder } from '@angular/forms';
import { Info } from 'src/app/model/info';
import { Observable, of } from 'rxjs';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-exemple7',
  templateUrl: './exemple7.component.html',
  styleUrls: ['./exemple7.component.scss']
})
export class Exemple7Component implements OnInit {
  cName: FormControl;

  cAge: FormControl;

  cJob: FormControl;

  cMail: FormControl;

  formValid = false;

  loading = false;

  myForm: FormGroup;

  info: Info = {
    name: null,
    age: 0,
    mail: null,
    job: null
  }

  private name(c: AbstractControl): ValidationErrors | null {
    if (c.value && typeof c.value === 'string') {
      const value: string = c.value || '';
      const valid = value.match(/^([a-zA-Z\s])*$/);
      return valid ? null : { name: true };
    } else {
      return null;
    }

  }

  private formValidation(c: AbstractControl): Validators | null {
    if ((!this.cAge) || (!this.cJob)) {
      return null;
    }
    // console.log('###', this.cJob.value, this.cAge.value);
    if ((this.cAge.value < 35) && (this.cJob.value === 'Architect')) {
      return {
        rule: true
      }
    }
    return null;
  }

  private mailExists(c: FormControl): Observable<ValidationErrors | null> {
    if (!c.value) {
      return of(null);
    }
    this.loading = true;
    return this.$mailService.exists(c.value).pipe(
      finalize(() => this.loading = false),
      map(res => {
        console.log('##res', res);
        if (res) {
          return { exists: true }
        } else
          return null;
      })
    );
  }

  constructor(private $fb: FormBuilder, private $mailService: MailService) {

  }

  ngOnInit() {
    this.cName = this.$fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.name]);
    this.cAge = this.$fb.control(18, [Validators.required, Validators.min(18), Validators.max(45)]);
    this.cJob = this.$fb.control('Architect', [Validators.required]);
    this.cMail = this.$fb.control(null, [Validators.required, Validators.email], [this.mailExists.bind(this)]);
    this.myForm = this.$fb.group({
      name: this.cName,
      age: this.cAge,
      mail: this.cMail,
      job: this.cJob
    });
    this.myForm.setValidators([this.formValidation.bind(this)]);
    this.myForm.statusChanges.subscribe(
      s => this.formValid = s === 'VALID'
    );
  }

  formSubmitted() {
    this.info = this.myForm.value;
  }

}
