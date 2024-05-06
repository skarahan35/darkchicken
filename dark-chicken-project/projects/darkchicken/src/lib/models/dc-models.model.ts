import { Icons, InputValidationType } from "../types/dc-types";


export interface validationRules {
    type:InputValidationType,
    message?:string,
    value?:number | boolean,
    pattern?:string
}

export interface BreadCrumbModel{
    label?:string,
    link?:string,
    icon?:Icons
}

export interface TreeModel {
    title?:string,
    icon?:Icons,
    subItems?: TreeModel[],
    id?:string
}

export interface SidebarTreeModel {
    title?:string,
    icon?:Icons,
    subItems?: SidebarTreeModel[],
    link?: string
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