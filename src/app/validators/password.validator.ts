import { FormGroup } from '@angular/forms';

/**
 * cross field validator used for validating multiple form controls
 * @param control formGroup instance to attach validator to
 * @requirements must be attached to a FormGroup
 */
export const  passwordValidator = (control: FormGroup): {[key: string]: boolean } | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
   if (password && password.pristine || confirmPassword && confirmPassword.pristine) return null;

   return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch': true} : null;
}


