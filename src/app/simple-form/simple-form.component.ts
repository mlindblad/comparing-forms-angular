import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
  title = 'Simple Form'
  
  name = '';
  invalidNameErrorMessage = '';
  
  email = '';
  invalidEmailErrorMessage = '';
  submitMessage = ''

  successMessage = '';

  validateName() {
    this.invalidNameErrorMessage = '';
  
    if (this.name.length < 3) {
      this.invalidNameErrorMessage = 'Name must be at least 3 characters long'
    }

    if (this.name === '') {
      this.invalidNameErrorMessage = 'Name is required'
    }
  }

  validateEmail() {
    this.invalidEmailErrorMessage = '';

    if (this.email.indexOf('@') === -1) {
      this.invalidEmailErrorMessage = 'Must contain @ sign';
    }
  }

  validateOnSubmit() {
    this.submitMessage = '';
    this.successMessage = '';
    this.validateName();
    this.validateEmail();
    if (this.invalidNameErrorMessage || this.invalidEmailErrorMessage) {
      this.submitMessage = 'some fields contain invalid information';
    }

    if (this.submitMessage === '') {
      this.successMessage = 'Hurray. Ok to send form';
    }
  }
}
