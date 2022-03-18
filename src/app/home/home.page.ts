import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: card[];

  constructor(service: HomeService) {
    this.cards = service.getCards();
  }

  
}
