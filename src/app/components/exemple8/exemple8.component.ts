import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-exemple8',
  templateUrl: './exemple8.component.html',
  styleUrls: ['./exemple8.component.scss']
})
export class Exemple8Component implements OnInit {

  cName: FormControl;

  myForm: FormGroup;

  submittedData: any;

  private static number(c: AbstractControl): ValidationErrors | null {
    if (c.value && typeof c.value === 'string') {
      const value: string = c.value || '';
      const valid = value.match(/^([0-9])*$/);
      return valid ? null : { number: true };
    } else {
      return null;
    }

  }


  createLine(): FormGroup {
    const cProduct: FormControl = this.$fb.control(null, [Validators.required]);
    const cQuantity: FormControl = this.$fb.control(1, [Validators.required, Exemple8Component.number, Validators.min(1), Validators.max(20)]);
    return this.$fb.group({
      product: cProduct,
      quantity: cQuantity
    });
  }




  constructor(private $fb: FormBuilder) {

  }

  addLine() {
    const items = this.myForm.get('items') as FormArray;
    items.push(this.createLine());
  }

  remove(i: number) {
    const items = this.myForm.get('items') as FormArray;
    items.removeAt(i);
  }

  get itemsControls() {
    return this.myForm.get('items')['controls'];
  }

  ngOnInit() {
    this.cName = this.$fb.control(null, [Validators.required]);
    const arr = this.$fb.array([this.createLine()]);
    this.myForm = this.$fb.group({
      name: this.cName,
      items: arr
    });

  }

  formSubmitted() {
    this.submittedData = this.myForm.value;
  }

}
