import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  username: string = '';
  pwd: string = '';
  confirmPwd: string = ''; 
  errorTxt: string = '';
  IsDiplay: boolean = false;

  check(): void {

    
    if (!this.pwd.trim()) {
      this.errorTxt = "Veuillez saisir un mot de passe.";
      return;
    }
    if (!this.confirmPwd.trim()) {
      this.errorTxt = "Veuillez confirmer votre mot de passe.";
      return;
    }
    if (this.pwd !== this.confirmPwd) {
      this.errorTxt = "Les mots de passe ne correspondent pas.";
      return;
    }

    this.errorTxt = '';
    this.IsDiplay = true;

    console.log('Utilisateur inscrit :', {
      username: this.username
    });

    this.resetForm();
  }

  resetForm(): void {
    this.username = '';
    this.pwd = '';
    this.confirmPwd = '';
    this.IsDiplay = false;
  }
}
