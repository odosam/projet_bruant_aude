import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../states/panier.state';
import { Produit } from '../shared/model/produit';
import { AjoutPanier, SupprPanier } from './panier.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  panierItems$: Observable<{ produit: Produit, quantity: number }[]>;  
  itemCount$: Observable<number>;  

  constructor(private store: Store) {
    
    this.panierItems$ = this.store.select(PanierState.getItems);
    
    
    this.itemCount$ = this.store.select(PanierState.getCount);
  }

  AjoutPanier(produit: Produit) {
    this.store.dispatch(new AjoutPanier(produit));
  }

  SupprPanier(produit: Produit) {
    this.store.dispatch(new SupprPanier(produit));
  }

  
  getTotal(panierItems: { produit: Produit, quantity: number }[] | null | undefined): number {
    if (!panierItems) {
      return 0;
    }
    return panierItems.reduce((total, item) => total + (item.produit.prix * item.quantity), 0);
  }

  payerPanier() {
    // Exemple d'alerte de confirmation
    alert('Le paiement a été effectué !');

    // Tu peux aussi rediriger l'utilisateur vers une page de paiement ici
    // this.router.navigate(['/payment']);
  }
}
