import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  
  checkStrength(password: string): string {
    if (password.length < 8) {
      return 'too-short';
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'easy';
    } else if (/^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password) || /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'medium';
    } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password)) {
      return 'strong';
    }
    return 'unknown';
  }
}