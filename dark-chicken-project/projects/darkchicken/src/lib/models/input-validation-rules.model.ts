import { Icons, InputValidationType } from "../types/dc-types";


export interface InputValidationRulesModel {
    type:InputValidationType,
    message?:string,
    value?:number,
    pattern?:string
}

export interface BreadCrumbModel{
    label:string,
    link:string,
    icon:Icons
}