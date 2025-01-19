import { Produit } from '../shared/model/produit'

export class AddToCart {
    static readonly type = '[Cart] Add';
    constructor(public payload: Produit) {}
}

export class RemoveFromCart {
    static readonly type = '[Cart] Remove';

    constructor(public payload: Produit, public quantity: number = 1) {}
}