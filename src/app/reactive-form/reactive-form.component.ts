import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
    selector: 'reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
    title = 'Reactive Form';

    registerForm: FormGroup;
    submitted = false;
    successMessage = '';

    constructor(
        private customValidator: CustomvalidationService
      ) { }

    ngOnInit() {
        this.registerForm = new FormGroup({
            name: new FormControl('', [Validators.required, this.customValidator.firstCharUpperCaseValidator()]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    get control() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            this.successMessage = 'Hurray. Ok to send form';
        }
    }
}
