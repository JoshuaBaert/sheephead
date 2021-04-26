import { Component, ViewEncapsulation } from '@angular/core';

const trumpOrder = [
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

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .main {
      display: flex;
      flex-direction: row;
      min-height: 100vh;
    }

    .trump-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      margin-top: 2%;
      margin-bottom: 2%;
    }

    #trump-suits, #trump-cards {
      display: flex;
      flex-direction: column;
      height: 100%;

    }

    #trump-suits {
      min-width: 35px;
      align-items: center;
    }

    .trump-card {
      font-size: 40px;
    }

    .clubs {
      color: black;
    }
    .spades {
      color: black;
    }
    .hearts {
      color: red;
    }
    .diams {
      color: red;
    }
    .suit {
      min-width: 15px
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
        <div class="point-summary"></div>

        <div class="fail-summary"></div>
      </div>
    </div>
  `,
})
export class AppComponent {
  trumpOrder = trumpOrder;

  formatCardText(trump) {
    return `<span class="suit ${trump.suit}">&${trump.suit};</span>`;
  }
}
