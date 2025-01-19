import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../states/panier.state';
import { Router } from '@angular/router'; // Ajoute le Router pour la navigation
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tetiere',
  imports: [CommonModule, RouterModule],
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {
  itemCount$: Observable<number | null>;
  isAuthenticated: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.itemCount$ = this.store.select(PanierState.getCount);
  }

  ngOnInit() {
    // Vérifier si le token existe dans localStorage
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token; // Si le token existe, l'utilisateur est connecté
  }

  getItemCount(itemCount: number | null): number {
    return itemCount ?? 0;
  }

  // Méthode pour naviguer vers le profil
  goToProfile() {
    this.router.navigate(['/profil']);
  }

  // Méthode pour naviguer vers la page de connexion
  goToLogin() {
    this.router.navigate(['/connexion']);
  }

  // Méthode pour se déconnecter
  logout() {
    localStorage.removeItem('token'); // Supprimer le token de localStorage
    this.isAuthenticated = false; // Mettre à jour l'état de la connexion
    this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
  }
}
