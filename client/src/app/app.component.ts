import { Component, ViewEncapsulation } from '@angular/core';

const numberOfTrump = 14;

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .trump-card {
      font-size: calc(calc(100vh / ${numberOfTrump + 1}) * .90);
      height: calc(calc(100vh / ${numberOfTrump}) - 1px);
    }
  `],
  template: `
    <div class="main">
      <div class="trump-container">
        <div id="trump-suits">
          <div *ngFor="let trump of trumpOrder" class="trump-card" [innerHTML]="formatCardText(trump)"></div>
        </div>

        <div id="trump-cards">
          <div *ngFor="let trump of trumpOrder" class="trump-card">{{trump.card}}</div>
        </div>
      </div>

      <div class="main-container">
        <div class="point-summary">
          <h2>Card Point Values</h2>
          <div class="points-table">
            <div class="points-cards">
              <div *ngFor="let row of pointTable">{{row.card}}</div>
            </div>

            <div class="points-values">
              <div *ngFor="let row of pointTable">{{row.value}}</div>
            </div>
          </div>
        </div>

        <div class="fail-summary">
          <h2>Fail (Non Trump)</h2>
          <div class="fail-cards">
            <div *ngFor="let card of failTable">{{card.card}}</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  trumpOrder = [
    {
      suit: 'clubs',
      card: 'Q',
      isFirstQueen: true,
    },
    {
      suit: 'diams',
      card: '7',
    },
    {
      suit: 'spades',
      card: 'Q',
    },
    {
      suit: 'hearts',
      card: 'Q',
    },
    {
      suit: 'diams',
      card: 'Q',
    },
    {
      suit: 'clubs',
      card: 'J',
      isFirstJack: true,
    },
    {
      suit: 'spades',
      card: 'J',
    },
    {
      suit: 'hearts',
      card: 'J',
    },
    {
      suit: 'diams',
      card: 'J',
    },
    {
      suit: 'diams',
      card: 'A',
    },
    {
      suit: 'diams',
      card: '10',
    },
    {
      suit: 'diams',
      card: 'K',
    },
    {
      suit: 'diams',
      card: '9',
    },
    {
      suit: 'diams',
      card: '8',
    },
  ];
  pointTable = [
    {
      card: 'A',
      value: 11,
    },
    {
      card: '10',
      value: 10,
    },
    {
      card: 'K',
      value: 4,
    },
    {
      card: 'Q',
      value: 3,
    },
    {
      card: 'J',
      value: 2,
    },
  ];
  failTable = [
    {
      card: 'A',
    },
    {
      card: '10',
    },
    {
      card: 'K',
    },
    {
      card: '9',
    },
    {
      card: '8',
    },
    {
      card: '7',
    },
  ];

  formatCardText(trump): string {
    return `<span class="suit ${trump.suit}">&${trump.suit};</span>`;
  }
}
