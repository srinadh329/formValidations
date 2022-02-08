import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cal',
  templateUrl: './form-cal.component.html',
  styleUrls: ['./form-cal.component.scss']
})
export class FormCalComponent implements OnInit {
  CalForm: FormGroup;
  value:any
  constructor(private formbuilder:FormBuilder) {

    this.CalForm = this.formbuilder.group({
      name:['',Validators.required],
      gross_salary:['',Validators.required],
      hra:['',Validators.required],
      incentives:['',Validators.required],
      pf:['',Validators.required],
      tax:['',Validators.required],
    })
   }

  ngOnInit(): void {
    
  }
  total(){
   
    // let total = this.CalForm.value;
    if(this.CalForm.valid){
      let total = parseInt(this.CalForm.value.gross_salary) + parseInt(this.CalForm.value.hra) + 
      parseInt(this.CalForm.value.incentives) - (parseInt(this.CalForm.value.pf)+ parseInt(this.CalForm.value.tax));
      console.log(total)
      this.value = total
    }
  
  }

}
