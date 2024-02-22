import { Injectable } from '@angular/core';
import { LanguageType } from '../components/assets/types/dc-types';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLanguage: LanguageType = 'tr';

    translations:any = {
        'en': {
            'invalid-input': "Invalid input"
        },
        'tr': {
            'invalid-input': "Geçersiz giriş"
        }
    };

    getTranslation(key: string): any {
        return this.translations[this.currentLanguage][key]
    }

    setLanguage(lang: LanguageType) {
        this.currentLanguage = lang
    }
}
