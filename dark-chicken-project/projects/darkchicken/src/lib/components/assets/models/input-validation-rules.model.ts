import { InputValidationType } from "../types/dc-atom-input-types";

export interface InputValidationRulesModel {
    type:InputValidationType,
    message:string,
    value:number,
    pattern:string
}