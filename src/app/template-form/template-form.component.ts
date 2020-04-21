import { Component } from '@angular/core';

@Component({
  selector: 'template-profile-form',
  templateUrl: './template-form.component.html',
  styles: [' .template-form { margin: 10px 10px 50px 10px}']
})
export class TemplateFormComponent  {


  user = {name: '', password: '', confirmPassword: ''}

  onSubmit() {
    alert('Template for submitted successfully')
  }


}
