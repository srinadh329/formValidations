import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  dynamicForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.dynamicForm = this.formbuilder.group({
      // name:['',Validators.required],
      // last:['',Validators.required],
      newData: this.formbuilder.array([
        
      ])
    })
  }

  ngOnInit(): void {
   
  }
  dynamicAdd(){
    this.newData.push(this.formbuilder.group({
      fname:[''],
      lname:[]
    }))
  }
  dynamicRemove(index:number){
    console.log(index)
    this.newData.removeAt(index)
  }
  get newData(){
    return this.dynamicForm.get('newData') as FormArray;
  }
  dynamicData(){
    if(this.dynamicForm.valid){
      console.log(this.dynamicForm.value)
    }
  }
}
