import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-connexion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  standalone : true
})
export class ConnexionComponent {

  connexionForm : FormGroup;
  username: string = '';
  password: string = '';
  errorMessage: string = ''

  @Output() connexion = new EventEmitter<{ username : string ; password : string}>();

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private authService : AuthService
    // private userService : UserService

  ){
    this.connexionForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  onSubmit() {
    if (this.connexionForm.valid) {

      const { username, password } = this.connexionForm.value;

      this.authService.login(username, password).subscribe({
        next: (response) => {
          // Stocker le token dans localStorage si la connexion réussit
          localStorage.setItem('token', response.token);
          this.connexionForm.reset();
          this.router.navigate(['/accueil']);  // Rediriger vers le profil de l'utilisateur ou une page protégée
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
        }
      });

      // console.log('Email:', this.username);
      // console.log('Mot de passe:', this.password);
  
    }
    else{
      console.log('Account is not valid');
    
    }
  }

}
