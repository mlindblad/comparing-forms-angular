import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  title = 'Template driven Form'

  displayName = '';
  email = '';
}
