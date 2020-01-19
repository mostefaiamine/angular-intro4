import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrls: ['./exemple2.component.scss']
})
export class Exemple2Component implements OnInit {

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
