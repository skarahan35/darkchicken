import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[toast]'
})

export class ToastDirective{
    constructor(public ViewContainerRef: ViewContainerRef){}
}