import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../card.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-display-card',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  cards$: Observable<any[]> = of([]);
  
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards$ = this.cardService.getCard();
  }

  deleteCard(index: number) {
    this.cardService.deleteCard(index);
  }
}
