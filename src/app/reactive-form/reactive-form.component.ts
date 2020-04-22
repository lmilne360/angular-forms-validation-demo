import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, passwordValidator } from '../validators';

@Component({
  selector: 'reactive-profile-form',
  templateUrl: './reactive-form.component.html',
  styles: ['.reactive-form{margin: 10px}']
})
export class ReactiveFormComponent  {


  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    username: ['', [Validators.required, forbiddenNameValidator(/admin/i)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validators: passwordValidator, updateOn: "blur"})

  onSubmit() {
    alert('Form submitted successfully')
  }


}
