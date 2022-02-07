import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.scss']
})
export class GstComponent implements OnInit {
  gstForm:any;
  value:any
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.gstForm = this.formbuilder.group({
      name:['',Validators.required],
      pirce:['',Validators.required],
      qty:['',Validators.required],
      gst:['',Validators.required],
      discount:['']
    })
  }
  total(){
    if(this.gstForm.valid && this.gstForm.value.pirce 
      && this.gstForm.value.qty && this.gstForm.value.gst){
      let res = parseInt(this.gstForm.value.pirce) * parseInt(this.gstForm.value.qty);
      let total = (res* parseInt(this.gstForm.value.gst)/100) + res
      this.value = total;
      console.log(this.value)

    }
    else if(this.gstForm.valid && this.gstForm.value.pirce 
      && this.gstForm.value.qty && this.gstForm.value.gst && this.gstForm.value.discount){
      let res = parseInt(this.gstForm.value.pirce) * parseInt(this.gstForm.value.qty);
      let total = (res* parseInt(this.gstForm.value.gst)/100) + res
      this.value = total - parseInt(this.gstForm.value.discount);
      console.log(this.value)

    }
  }
}
