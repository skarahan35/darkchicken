import { TemplateRef, PipeTransform } from "@angular/core";

export interface Model {
    type: string;
    event: MouseEvent | KeyboardEvent;
    row: any;
    rowElement: any;
    cellElement: any;
    cellIndex: number;
}

export interface ISummaryColumn {
    summaryFunc?: (cells: any[]) => any;
    summaryTemplate?: TemplateRef<any>;

    prop: string;
    pipe?: PipeTransform;
}

export interface IDcDatatableConfig {
    messages: {
        emptyMessage: string; // Message to show when array is presented, but contains no values
        totalMessage: string; // Footer total message
        selectedMessage: string; // Footer selected message
    }
}