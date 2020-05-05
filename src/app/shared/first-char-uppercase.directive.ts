import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[firstCharUpperCase]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstCharUppercaseDirective, multi: true}]
})
export class FirstCharUppercaseDirective implements Validator {

  constructor(
    private customValidator: CustomvalidationService
  ) { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log(control);
    return this.customValidator.firstCharUpperCaseValidator()(control);
  }
}
