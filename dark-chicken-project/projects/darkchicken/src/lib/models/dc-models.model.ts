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

export interface TreeModel {
    title?:string,
    icon?:Icons,
    subItems?: TreeModel[],
}

export interface ListModel{
    id:any
    data:any
}

export interface TabModel{
    tabId:string,
    tabTitle:string,
    tabIcon?:Icons,
    isActive?:boolean
}

export interface nativeEvent{
    nativeElement:Event
}