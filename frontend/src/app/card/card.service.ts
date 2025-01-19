import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsSubject = new BehaviorSubject<any[]>([]);

  // Utiliser le BehaviorSubject comme source d'Observable
  getCard() {
    return this.cardsSubject.asObservable(); // Retourner un Observable
  }

  addCard(card: { cardName: string; cardCode: string; cardCcv: string; cardExpiry: string }) {
    this.cardsSubject.next([...this.cardsSubject.value, card]); // Mise à jour avec les nouvelles cartes
  }

  updateCard(i: number, updatedCard: { cardName: string; cardCode: string; cardCcv: string; cardExpiry: string }) {
    const updatedCards = [...this.cardsSubject.value];
    updatedCards[i] = updatedCard;
    this.cardsSubject.next(updatedCards);
  }

  deleteCard(index: number) {
    const updatedCards = this.cardsSubject.value.filter((_, i) => i !== index);
    this.cardsSubject.next(updatedCards); // Mise à jour après suppression
  }
}

    // _ = objet parcouru à chaque occurence, par convention _ car pas utilisé dans la fonction
    // i = index de l'element parcouru ,  .filter() renvoie un tab 
    
    // si i = indice (=carte a suppr) donc pas ajouté dans le tableau de .filter donc carte pas affichée
    
  