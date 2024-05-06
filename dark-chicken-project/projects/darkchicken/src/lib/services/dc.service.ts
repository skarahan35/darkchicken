import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DCService{
    constructor(private http: HttpClient) { }

    getIconSVG(iconName: string){
      return this.http.get(`assets/icons/${iconName}.svg`, { responseType: 'text' })
      
    }

    generateUniqueId(): string {
      const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      return uniqueId;
    }
}