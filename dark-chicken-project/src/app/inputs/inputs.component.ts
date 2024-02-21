import { Component } from '@angular/core';
import { InputValidationRulesModel } from 'projects/darkchicken/src/lib/components/assets/models/input-validation-rules.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  validationRules: InputValidationRulesModel[] = [
    {
      type: 'required',
      message:"bu alan gerekli"
    },

    {
      type:'regEx',
      message:'pattern test',
      pattern:"[A-Za-z]{1,25}"
    }
  ];
}
