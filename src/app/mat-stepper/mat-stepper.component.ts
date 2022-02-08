import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Validation} from '../material/customValidation'
@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss']
})
export class MatStepperComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.firstFormGroup = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      conformpassword:['',Validators.required]
    },
    {
      validators: Validation
    });
    this.secondFormGroup = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      conformpassword:['',Validators.required]
    });
  }

  ngOnInit(): void {
    
   
  }
  twoFormData(){
    let data = {firstValue:this.firstFormGroup.value, secondValue:this.secondFormGroup.value}
    console.log(data)
  }
}
