import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

    user: {
      name: string;
      email: string;
      phone: string;
    };

    constructor() {
      // Initialisation des données utilisateur (par exemple, récupérées depuis un service ou une API)
      this.user = {
        name: 'Aude Bruant',
        email: 'aude.bruant@example.com',
        phone: '+33 6 12 34 56 78',
      };
    }

}
