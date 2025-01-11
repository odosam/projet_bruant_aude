import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-connexion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  standalone : true
})
export class ConnexionComponent {

  connexionForm : FormGroup;
  email: string = '';
  password: string = '';

  @Output() connexion = new EventEmitter<{ email : string ; password : string}>();

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    // private userService : UserService

  ){
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  onSubmit() {
    if (this.connexionForm.valid) {
      console.log('Email:', this.email);
      console.log('Mot de passe:', this.password);
      // const {email,password} = this.connexionForm.value ;

      // this.userService.login(email,password).subscribe(
      //   (res: SigninResponse) => {
      //     this.connexionForm.reset();
      //     localStorage.setItem('token', res.accessToken);
      //     this.router.navigate(['/userProfile']);
      //   },
      //   (err) => {
      //     console.error(err);
      //   }
      // );
    }
    else{
      console.log('Account is not valid');
    
    }
  }

}
