import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.component.html',
  styleUrls: ['./exemple4.component.scss']
})
export class Exemple4Component implements OnInit {

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
    this.cName = this.$fb.control(null);
    this.cAge = this.$fb.control(18);
    this.cJob = this.$fb.control('Architect');
    this.cMail = this.$fb.control(null);
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
