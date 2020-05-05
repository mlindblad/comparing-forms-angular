import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

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

    ngOnInit() {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.required),
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
