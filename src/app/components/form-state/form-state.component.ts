import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss']
})
export class FormStateComponent implements OnInit {

  @Input() control: any;

  constructor() { }

  ngOnInit() {
  }

}
