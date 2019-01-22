import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CardDataService } from './card-data.service';
import { Card } from './card.model';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  cardSubscription: Subscription;
  data = '';
  error = '';
  counter = 0;
  cardModelArr: Card[] = [];
  isDetail = false;
  isProcessing: boolean;
  isShipped: boolean;

  constructor(private cardService: CardDataService  ) {}

  ngOnInit() {

    // CARDS
    const timerObs = Observable.create((observer: any) => {
      observer.next('Observable One is alive!');
      setInterval(
        () => {
          this.counter++;
          observer.next('Observable push: ' + this.counter);
        }, 900000);      // 5 minutes = 300000 milliseconds
    });

    this.cardSubscription = timerObs.subscribe(
      (x: any) => {
        this.loadCardData();

        this.data = x;
      },
      error => {
        this.error = error;
      });
  }

  loadCardData() {
    this.cardModelArr = [];
    this.cardService.cards.forEach((card) => {
      console.log('loadCardData.cardModelArr: ', this.cardModelArr);
      this.cardModelArr.push(
        new Card(
          card.cardId,
          card.htmlId,
          card.title,
          card.icon,
          card.headerClass,
          card.footerClass,
          card.pillboxClass,
          card.items,
          card.summary
        )
      );
    });
  }

  onCLickDetail(event) {
    const id = event.target.id;

    if (id === 'Processing_Orders') {
      this.isDetail = true;
      this.isProcessing = true;
      this.isShipped = false;
    }
    if (id === 'Shipped_Orders') {
      this.isDetail = true;
      this.isShipped = true;
      this.isProcessing = false;
    }
  }

  onCloseProcessing(event) {
    this.isDetail = false;
    console.log('cards.event ', event);
  }

  onCloseShipped(event) {
    this.isDetail = false;
    console.log('cards.event ', event);
  }

  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
  }

}
