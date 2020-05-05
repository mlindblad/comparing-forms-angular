import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {


  public firstCharUpperCaseValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const firstChar = control.value.charAt(0);
      const valid = firstChar === firstChar.toUpperCase();
      
      return valid ? null : { firstCharUpperCase: true };
    };
  }


}
