import { AbstractControl, ValidatorFn } from "@angular/forms";


export function MinLengthValidator(longueur : number) : ValidatorFn | null{

    return (control : AbstractControl) => {
        let value : string = control.value
    }

}