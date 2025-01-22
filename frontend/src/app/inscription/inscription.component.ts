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
  prenom: string = '';
  nom: string = '';
  telephone: string = '';
  email: string = '';
  pwd: string = '';
  confirmPwd: string = ''; 
  errorTxt: string = '';
  IsDiplay: boolean = false;

  check(): void {
    if (!this.prenom.trim()) {
      this.errorTxt = "Veuillez saisir un prénom.";
      return;
    }
    if (!this.nom.trim()) {
      this.errorTxt = "Veuillez saisir un nom.";
      return;
    }
    if (!this.telephone.trim()) {
      this.errorTxt = "Veuillez saisir un numéro de téléphone.";
      return;
    }
    if (!this.email.trim()) {
      this.errorTxt = "Veuillez saisir un email.";
      return;
    }
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
      prenom: this.prenom,
      nom: this.nom,
      telephone: this.telephone,
      email: this.email
    });

    this.resetForm();
  }

  resetForm(): void {
    this.prenom = '';
    this.nom = '';
    this.telephone = '';
    this.email = '';
    this.pwd = '';
    this.confirmPwd = '';
    this.IsDiplay = false;
  }
}
