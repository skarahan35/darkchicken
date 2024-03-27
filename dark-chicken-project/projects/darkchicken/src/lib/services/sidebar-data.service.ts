import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarDataService {

  constructor(private http: HttpClient) { }

  getSidebarData(): Observable<any[]> {
    return this.http.get<any[]>('../../../assets/jsons/sidebar-data.json');
  }
}
