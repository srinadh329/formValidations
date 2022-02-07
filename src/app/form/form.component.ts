import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ageValidation} from '../material/customValidation'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formValidation:any;
  states:any=[{name:'Andhra Pradesh',cities:[{name:'vizag'},{name:'vzm'}]},
              {name:'Telangana',cities:[{name:'hyd'},{name:'kmm'}]}]
              city:any;
  constructor(private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.formValidation = this.formbuilder.group({
      name:['',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]],
      age:['',[Validators.required,Validators.pattern('^[0-9]*$'),ageValidation]],
      state:['',[Validators.required]],
      city:['',Validators.required],
    });
    console.log(this.states.find((x:any)=>console.log(x.name)))
  }
  // state selection function

  stateSelection(data:any){
    console.log(data.value)
    this.city = this.states.find((s:any)=>s.name == data.value)?.cities;
  }
   // state selection function
}
