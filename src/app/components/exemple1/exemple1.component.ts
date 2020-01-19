import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-exemple1',
  templateUrl: './exemple1.component.html',
  styleUrls: ['./exemple1.component.scss']
})
export class Exemple1Component implements OnInit {

  submittedData: any = null;

  info: Info = {
    name: null,
    age: 0,
    job: null,
    mail: null
  };



  constructor() {

  }



  ngOnInit() {
  }

  onSubmit() {
    this.submittedData = this.info;

  }

}
