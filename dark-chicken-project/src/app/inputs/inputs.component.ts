import { Component, OnInit } from '@angular/core';

import { InputValidationRulesModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { LanguageService } from 'projects/darkchicken/src/lib/services/language.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit{

  constructor(private testService:LanguageService){}

  consoleText=''

  ngOnInit(): void {
    this.testService.setLanguage('en')
  }

  onValueChanged(e:any){
  }

  onFocusIn(e:any){
  }

  onFocusOut(e:any){
  }

  onValidating(e:any){
    
  }

  onValidated(e:any){
    
  }

  validationRulesText: InputValidationRulesModel[] = [
    {
      type: 'required',
      message:"Zorunlu alan"
    },
    {
      type: 'minLength',
      value: 3,
      message:"En az 3 karakter içermelidir."
    },
    {
      type: 'maxLength',
      value: 10,
      message:"En fazla 10 karakter içerebilir."
    },

  ];
  validationRulesNumber: InputValidationRulesModel[] = [
    {
      type: 'required',
      message:"Zorunlu alan"
    },
    {
      type: 'min',
      value: 5,
      message: 'En az 5 girilir.'
    },
    {
      type: 'max',
      value: 20,
      message: 'En falza 20 girilir.'
    }

  ];


  dcValueChanged(e:any){
    this.consoleText+="dcValueChanged \n";
    console.log("dcValueChanged");
  }
  dcFocusOut(e:any){
    this.consoleText+="dcFocusOut \n";
    console.log("dcFocusOut");
  }
  dcFocusIn(e:any){
    this.consoleText+="dcFocusIn \n";
    console.log("dcFocusIn");
  }
  dcValidating(e:any){
    this.consoleText+="dcValidating \n";
    console.log("dcValidating");
  }
  dcValidated(e:any){
    this.consoleText+="dcValidated \n";
    console.log("dcValidated");
  }
}
