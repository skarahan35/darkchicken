import { Component, OnInit } from '@angular/core';

import { InputValidationRulesModel } from 'projects/darkchicken/src/lib/models/input-validation-rules.model';
import { LanguageService } from 'projects/darkchicken/src/lib/services/language.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit{

  constructor(private testService:LanguageService){}

  ngOnInit(): void {
    this.testService.setLanguage('en')
  }

  validationRules: InputValidationRulesModel[] = [
    {
      type: 'required',
      message:"bu alan gereklixxxxxxxxxxxxxxxxxxxxxx"
    },

    {
      type:'regEx',
      message:'pattern test',
      pattern:"[A-Za-z]{1,25}"
    }
  ];
}
