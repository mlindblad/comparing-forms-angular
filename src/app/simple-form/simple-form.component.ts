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
  errorMessage = '';


  validateInput() {
    this.errorMessage = '';
    
    if (this.name === '') {
      this.errorMessage = 'Name is required';
    }
  }
}
