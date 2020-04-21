import { Directive } from "@angular/core";
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { passwordValidator } from '../validators';


/**
 * directive for password validator
 * @requirement must be attached to fromGroup instance
 */
@Directive({
  selector: '[appPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})

export class PasswordValidatorDirective implements Validator {
  validate(control: FormGroup): ValidationErrors | null {
    return passwordValidator(control)
  }
}
