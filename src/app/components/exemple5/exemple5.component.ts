import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-exemple5',
  templateUrl: './exemple5.component.html',
  styleUrls: ['./exemple5.component.scss']
})
export class Exemple5Component implements OnInit {

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

  constructor(private $fb: FormBuilder) {

  }

  ngOnInit() {
    this.cName = this.$fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.cAge = this.$fb.control(18, [Validators.required, Validators.min(18), Validators.max(45)]);
    this.cJob = this.$fb.control('Architect', [Validators.required]);
    this.cMail = this.$fb.control(null, [Validators.required, Validators.email]);
    this.myForm = this.$fb.group({
      name: this.cName,
      age: this.cAge,
      mail: this.cMail,
      job: this.cJob
    })
  }

  formSubmitted() {
    this.info = this.myForm.value;
  }

}
