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
    
  }

  getItemCount(itemCount: number | null): number {
    return itemCount ?? 0;
  }


  goToProfile() {
    const token = localStorage.getItem('accessToken');
    if (!token || token === 'undefined' || token === 'null') {
      this.router.navigate(['/connexion']);
    } else {
      this.router.navigate(['/profil']);
    }
  }

  logout() {
    localStorage.removeItem('token'); 
    this.isAuthenticated = false; 
    this.router.navigate(['/connexion']); 
  }
}
