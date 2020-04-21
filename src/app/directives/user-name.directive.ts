import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { forbiddenNameValidator2 } from '../validators';
import { forbiddenNameValidator } from '../validators/user-name.validator';

/**
 * form control validation directive
 * @requirement must be attached to a form control element
 */

// @Directive({
//   selector:'[appUsernameValidator]',
//   providers: [
//     {provide: NG_VALIDATORS, useExisting: UsernameValidatorDirective, multi: true}
//   ]
// })

// export class UsernameValidatorDirective implements Validator {
//  validate(control: AbstractControl): ValidationErrors | null  {
//   return forbiddenNameValidator(control)
//  }
// }


/**
 * form control validation directive that accepts parameter
 * @param name {string} value assigned to directive in template
 * @requirement must be attached to form control element in template
 */
@Directive({
  selector:'[appForbiddenName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UsernameValidatorDirective, multi: true}
  ]
})

export class UsernameValidatorDirective implements Validator {
  @Input('appForbiddenName') name: string;

 validate(control: AbstractControl): ValidationErrors | null  {
  return name ? forbiddenNameValidator2(new RegExp(name))(control) : forbiddenNameValidator(control);
 }
}
