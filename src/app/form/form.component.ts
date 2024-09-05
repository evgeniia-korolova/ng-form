import { Component, OnInit } from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';
import { passwordMatchValidator } from '../validators/password-match.validator';


@Component({
    selector: 'app-form-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgClass],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})

export class FormComponent  {
  password: string = '';
  strength: string | null = null;

  constructor(private passwordStrengthService: PasswordStrengthService) {}
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    'password-two': new FormControl('', Validators.required),
  }, { validators: passwordMatchValidator });
  

   onPasswordInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const password = input.value;
    this.password = password;
    this.strength = this.passwordStrengthService.checkStrength(password);
  }

   public handleSubmit() {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
      console.log(this.myForm.get(['login'])?.value);
    }else {
      alert('invalid data')
    }
   }
}
