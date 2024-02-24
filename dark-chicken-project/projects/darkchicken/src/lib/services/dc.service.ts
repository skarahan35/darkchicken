import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DCService{
    constructor(private http: HttpClient) { }

    getIconSVG(iconName: string) {
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' });
    }
}