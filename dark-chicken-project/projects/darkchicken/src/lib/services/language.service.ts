import { Injectable } from '@angular/core';
import { LanguageType } from '../types/dc-types';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private http: HttpClient) {

    }

    private currentLanguage: LanguageType = 'tr';

    getTranslation(key: string): Observable<any> {
        return this.http.get(`assets/i18n/${this.currentLanguage}.json`).pipe(
            map((res:any) => {
                return res[key] ? res[key] : key;
            })
        );
    }

    setLanguage(lang: LanguageType) {
        this.currentLanguage = lang
    }
}
