import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class DCService {
  constructor(private http: HttpClient) { }

  private invalidCells: any = []

  getIconSVG(iconName: string) {
    return this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' })

  }

  generateUniqueId(): string {
    const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return uniqueId;
  }

  checkValidationOfCell(rowId: string, column: any, isValid: boolean, component:any) {
    isValid ? this.removeInvalidCell(rowId, column) : this.addInvalidCell(rowId, column,component)
  }

  private addInvalidCell(rowId: string, column: any,component:any) {
    let tempRow = this.invalidCells.find((cell: any) => cell.hasOwnProperty(rowId));
    if (tempRow) {
      tempRow[rowId][column] = component;
    } else {
      let newRow: any = {};
      newRow[rowId] = {};
      newRow[rowId][column] = component;
      this.invalidCells.push(newRow);
    }
  }
  

  getInvalidCells() {
    return this.invalidCells
  }

  private removeInvalidCell(rowId: string, column: any) {
    const rowIndex = this.invalidCells.findIndex((row: any) => row.hasOwnProperty(rowId));
    if (rowIndex !== -1 && this.invalidCells[rowIndex][rowId].hasOwnProperty(column)) {
      delete this.invalidCells[rowIndex][rowId][column];
      // If the row is empty after removal, remove the entire row
      if (Object.keys(this.invalidCells[rowIndex][rowId]).length === 0) {
        this.invalidCells.splice(rowIndex, 1);
      }
    }
  }

  

}