import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ColorService{
    generatePastelColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const alpha = Math.random(); // Rastgele bir alfa değeri (0 ile 1 arasında)
      
        // Rastgele oluşturulan RGB değerlerini pastel renk tonuna dönüştürmek için beyaz ile karıştırıyoruz
        const pastelR = Math.floor((r + 255) / 2);
        const pastelG = Math.floor((g + 255) / 2);
        const pastelB = Math.floor((b + 255) / 2);
      
        // Pastel renk kodunu oluşturuyoruz
        const pastelColor = `rgba(${pastelR}, ${pastelG}, ${pastelB}, 0.5)`;
        
        return pastelColor;
      }
      
}