import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('password-two');

  if (!password || !confirmPassword) return null;
  else if (password === confirmPassword) return null;

  return password.value !== confirmPassword.value
    ? { passwordMismatch: true }
    : null;
}