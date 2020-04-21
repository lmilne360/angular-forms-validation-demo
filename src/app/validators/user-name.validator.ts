import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Validator function
 * @param control the formControl that the validator is attached to
 */

export const forbiddenNameValidator = (control: AbstractControl): {[key: string]: any} | null  => {
 const forbidden = /admin/.test(control.value);

 return forbidden ? {'forbiddenName': {value: control.value}} : null;

}

/**
 * A validator function factory that accepts a Regex  parameter
 * @param forbiddenName regex expression to use to compare value to
 */

export const forbiddenNameValidator2 = (forbiddenName: RegExp): ValidatorFn  => {
  return (control: AbstractControl): {[key: string]: any} | null  => {
    const forbidden = forbiddenName.test(control.value);

    return forbidden ? {'forbiddenName': {value: control.value}} : null;

   };
}

