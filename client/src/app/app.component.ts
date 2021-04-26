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

const point = [
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
    }

    #trump-suits, #trump-cards {
      display: flex;
      flex-direction: column;
      height: 100%;

    }

    #trump-suits {
      min-width: 38px;
      align-items: center;
    }

    .trump-card {
      font-size: calc(calc(100vh / ${trumpOrder.length}) * .90);
      height: calc(100vh / ${trumpOrder.length});
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
        <div class="point-summary">
          <h4>Card Values</h4>
          <div class="points-table">
            <div class="points-cards"></div>

            <div class="points-values"></div>
          </div>
        </div>

        <div class="fail-summary">

        </div>
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