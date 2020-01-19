import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Info } from 'src/app/model/info';



@Component({
  selector: 'app-exemple6',
  templateUrl: './exemple6.component.html',
  styleUrls: ['./exemple6.component.scss']
})
export class Exemple6Component implements OnInit {

  cName: FormControl;

  cAge: FormControl;

  cJob: FormControl;

  cMail: FormControl;

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

  constructor(private $fb: FormBuilder) {

  }

  ngOnInit() {
    this.cName = this.$fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.name]);
    this.cAge = this.$fb.control(18, [Validators.required, Validators.min(18), Validators.max(45)]);
    this.cJob = this.$fb.control('Architect', [Validators.required]);
    this.cMail = this.$fb.control(null, [Validators.required, Validators.email]);
    this.myForm = this.$fb.group({
      name: this.cName,
      age: this.cAge,
      mail: this.cMail,
      job: this.cJob
    });
    this.myForm.setValidators([this.formValidation.bind(this)]);
  }

  formSubmitted() {
    this.info = this.myForm.value;
  }


}
