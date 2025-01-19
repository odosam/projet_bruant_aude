import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardFormComponent, DisplayCardComponent],
  imports: [
    CommonModule, ReactiveFormsModule],

  exports: [CardFormComponent, DisplayCardComponent]
})
export class CardModule { }
