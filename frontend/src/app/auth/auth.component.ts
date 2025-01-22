import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {authResponse} from './authResponse';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  providers: [ApiService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginUserForm = new FormGroup({
    loginControl: new FormControl(''),
    passwordControl: new FormControl(''),
  });

  errorMessage: string = localStorage.getItem('errorMessage') || '';
  alreadySubmitted: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router : Router) {}

  ngOnInit() {
    this.loginUserForm = this.fb.group({
      loginControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]],
    });
  }

  protected getErrors(name: string) : string {
    if (this.loginUserForm != undefined){
      return this.validateTitleControl(this.getControlName(this.loginUserForm, name), this.alreadySubmitted);
    }
    return "never acces normalement";
  };

  submitForm() {
    this.errorMessage = '';
    localStorage.removeItem('errorMessage');
    this.alreadySubmitted = true;
    if (!this.loginUserForm?.valid) {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
      return;
    }

    const { loginControl, passwordControl } = this.loginUserForm?.value;

    if (loginControl && passwordControl){
      this.apiService.loginClient(loginControl, passwordControl).subscribe(
        (res: authResponse) => {
          this.loginUserForm.reset();
          localStorage.setItem('accessToken', res.accessToken.accessToken);
          console.log(res);
          this.router.navigate(['/profil']);
        },
        (err) => {
          this.errorMessage = err.error;
          console.error(err);
        }
      );
    }
  }
  
  validateTitleControl(titleControl: FormControl | undefined, alreadySubmitted: boolean): string {
    if (titleControl != undefined) {
      if(titleControl.errors?.['passwordsMismatch']) {
        return 'Les mots de passe ne correspondent pas';
      }
  
      if (titleControl.errors && (titleControl?.touched  || alreadySubmitted)) {
        if (titleControl.errors?.['required']) {
          return 'Le champ est obligatoire';
        }
  
        if (titleControl.errors?.['minlength']) {
          return `Le champ doit contenir au moins ${titleControl.errors['minlength'].requiredLength} caractères`;
        }
        if (titleControl.errors?.['maxlength']) {
          return `Le champ doit contenir au plus ${titleControl.errors['maxlength'].requiredLength} caractères`;
        }
  
        if(titleControl.errors?.['email']) {
          return 'Le champ doit être une adresse email valide';
        }
  
        if (titleControl.errors?.['pattern']) {
          return 'Le champ ne respecte pas le format attendu';
        }
  
        return 'Erreur non répertoriée';
      }
    }
    return '';
  }

  getControlName(formGroup: FormGroup, name: string): FormControl {
    return formGroup.get(name) as FormControl;
  }
}