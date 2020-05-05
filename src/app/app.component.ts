import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formType = 'reactive-form'

  toggleForm(type: string) {
    this.formType = type;
  }

  get simpleForm() {
    return this.formType === 'simple';
  }

  get templateDrivenForm() {
    return this.formType === 'template-driven'
  }

  get reactiveForm() {
    return this.formType === 'reactive-form'
  }
  
}
