import { Component, OnInit } from '@angular/core';
import { inputEventCodeHtml, inputEventCodeTs, inputSizeCode, labelPlaceholdercode, noDecorationCode, passiveCodeHtml, passiveCodeTs, validationCode, validationModelCode } from 'src/assets/codes/input';
import { InputValidationRulesModel, TabModel } from 'projects/darkchicken/src/lib/models/dc-models.model';
import { LanguageService } from 'projects/darkchicken/src/lib/services/language.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {

  constructor(private testService: LanguageService) { }

  validationModel = validationModelCode

  tabs: TabModel[] = [{
    tabId: 'des',
    tabTitle: 'Description'
  },
  {
    tabId: 'code',
    tabTitle: 'Code'
  },
  ]

  codeTabs:TabModel[] = [
    {
      tabId:'html',
      tabTitle:'HTML',
      tabIcon:'html5',
    },
    {
      tabId:'ts',
      tabTitle:'TS',
      tabIcon:'angular',
    }
  ]


  codes: any = {
    'readonly': {
      'HTML': true,
      'TS': false
    }
  }

  noDecorationCode = noDecorationCode
  labelPlaceholdercode = labelPlaceholdercode
  passiveCodeHtml = passiveCodeHtml
  passiveCodeTs = passiveCodeTs
  validationCode= validationCode
  inputEventCodeHtml=inputEventCodeHtml
  inputEventCodeTs=inputEventCodeTs
  inputSizeCode = inputSizeCode
  visibleInput = false


  consoleText = ''

  ngOnInit(): void {
    this.testService.setLanguage('en')
  }

  validationRulesText: InputValidationRulesModel[] = [
    {
      type: 'required',
      message: "Zorunlu alan"
    },
    {
      type: 'minLength',
      value: 30,
      message: "En az 3 karakter içermelidir."
    },
    {
      type: 'maxLength',
      value: 50,
      message: "En fazla 10 karakter içerebilir."
    },

  ];
  validationRulesNumber: InputValidationRulesModel[] = [
    {
      type: 'required',
      message: "Zorunlu alan"
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


  dcValueChanged(e: any) {
    console.log({"dcValueChanged": e});
  }
  dcFocusOut(e: any) {
    console.log({"dcFocusOut": e});
  }
  dcFocusIn(e: any) {
    console.log({"dcFocusIn": e});
    e.nativeElement.currentTarget.value = e.currentValue * 2
    debugger
  }
  dcValidating(e: any) {
    console.log({"dcValidating": e});
  }
  dcValidated(e: any) {
    console.log({"dcValidated": e});
  }

}
