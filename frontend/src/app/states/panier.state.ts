import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AjoutPanier, SupprPanier } from '../panier/panier.actions';
import { Produit } from '../shared/model/produit';
import { Injectable, Injector } from '@angular/core';

export interface PanierStateModel {
    items: { produit: Produit, quantity: number }[];
}

@State<PanierStateModel>({
    name: 'panier',
    defaults: { items: [] }
})
@Injectable()
export class PanierState {
    @Selector()
    static getItems(state: PanierStateModel): { produit: Produit, quantity: number }[] {
        return state.items;
    }

    @Selector()
    static getCount(state: PanierStateModel): number {
        return state.items.reduce((total, item) => total + item.quantity, 0); // Compte total avec les quantités
    }

    @Action(AjoutPanier)
    add({ getState, patchState }: StateContext<PanierStateModel>, { payload }: AjoutPanier) {
        const state = getState();
        const items = [...state.items];
        const existingItem = items.find(item => item.produit.ref === payload.ref);

        if (existingItem) {
            // Si l'article existe, augmenter la quantité
            existingItem.quantity++;
        } else {
            // Sinon, ajouter le produit avec une quantité de 1
            items.push({ produit: payload, quantity: 1 });
        }

        patchState({
            items
        });
    }

    // Action pour supprimer un produit du panier
    @Action(SupprPanier)
    remove({ getState, patchState }: StateContext<PanierStateModel>, { payload }: SupprPanier) {
        const state = getState();
        const items = [...state.items];

        const itemIndex = items.findIndex(item => item.produit.ref === payload.ref);

        if (itemIndex !== -1) {
            const item = items[itemIndex];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                items.splice(itemIndex, 1);
            }
        }

        patchState({
            items
        });
    }
}
