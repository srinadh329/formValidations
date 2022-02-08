import { AbstractControl } from "@angular/forms";

// export function customValidation =>{
//     public static ageValidation(contorl:AbstractControl)=>{
//         console.log(contorl.value)
//         return contorl.value < 18 ? {'aboveAge':true} : null
//     }

// }


// export function Validation(p:AbstractControl){
//     console.log(p.value)
//     return p.value.password !== p.value.conformpassword ? {'password':true} : null
// }

export class customValidation {

    public  static ageValidation(control: AbstractControl) {
        return control.value < 18 ? {'aboveAge':true} : null
   }

   public static PasswordValidation(control: AbstractControl) {
        
        console.log(control.value)
        return control.value.password !== control.value.conformpassword ? {'NotMatched':true} : null

      
   }
}