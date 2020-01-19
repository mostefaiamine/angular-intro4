import { Component, OnInit } from '@angular/core';
import { Observable, of, timer, interval, Observer } from 'rxjs';
import { take, map, delay, filter } from 'rxjs/operators';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrls: ['./exemple3.component.scss']
})
export class Exemple3Component implements OnInit {

  submittedData: any = null;

  mail='';

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
