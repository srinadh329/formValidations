import { AbstractControl } from "@angular/forms";

export function ageValidation(contorl:AbstractControl){
    console.log(contorl.value)
    return contorl.value < 18 ? {'age':true} : null
}

export function Validation(p:AbstractControl){
    console.log(p.value)
    return p.value.password !== p.value.conformpassword ? {'password':true} : null
}