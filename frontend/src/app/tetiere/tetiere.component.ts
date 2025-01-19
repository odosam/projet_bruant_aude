
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../states/panier.state';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ConnexionComponent } from '../connexion/connexion.component';

@Component({
  selector: 'app-tetiere',
  imports: [CommonModule, RouterModule, ConnexionComponent],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent implements OnInit {
    itemCount$: Observable<number | null>;

    constructor(private store: Store) {
        this.itemCount$ = this.store.select(PanierState.getCount);
    }
  
    ngOnInit() {
      this.itemCount$ = this.store.select(PanierState.getCount);
    }

    getItemCount(itemCount: number | null): number {
        return itemCount ?? 0;
    }
}