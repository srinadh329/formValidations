import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Validation} from '../material/customValidation'
@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss']
})
export class MatStepperComponent implements OnInit {
  firstFormGroup:any;
  secondFormGroup:any;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      conformpassword:['',Validators.required]
    },
    {
      validators: [Validation]
    }
    );
    this.secondFormGroup = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      conformpassword:['',Validators.required]
    },
    {
      validators: [Validation]
    }
    )
  }
  twoFormData(){
    let data = {user1:this.firstFormGroup.value, user2:this.secondFormGroup.value}
    console.log(data)
  }
}
