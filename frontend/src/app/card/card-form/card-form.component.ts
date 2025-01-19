import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  standalone: true, // Configuration standalone
  imports: [CommonModule, FormsModule], // Dépendances nécessaires
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardName = '';
  cardCode = '';
  cardCcv = '';
  cardExpiry = '';

  constructor(private cardService: CardService) {}

  addCard() {
    if (this.cardName && this.cardCode && this.cardCcv && this.cardExpiry) {
      const newCard = {
        cardName: this.cardName,
        cardCode: this.cardCode,
        cardCcv: this.cardCcv,
        cardExpiry: this.cardExpiry
      };
      this.cardService.addCard(newCard);
      this.resetForm();
    } else {
      alert('Please fill in all fields.');
    }
  }

  resetForm() {
    this.cardName = '';
    this.cardCode = '';
    this.cardCcv = '';
    this.cardExpiry = '';
  }
}
