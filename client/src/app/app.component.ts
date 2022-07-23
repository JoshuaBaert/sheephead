import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { failTable, pointTable, trumpOrder } from './cards';

const numberOfTrump = trumpOrder.length;

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .trump-card {
      font-size: calc(calc(var(--vh) / ${numberOfTrump + 1}) * .90);
      height: calc(calc(var(--vh) / ${numberOfTrump}) - 1px);
    }
  `],
  template: `
    <div class="main" (dblclick)="onDoubleClick()">
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
          <div class="fail-wrapper">
            <div class="fail-cards">
              <ng-template ngFor let-card [ngForOf]="failTable">
                <span class="clubs">&clubs;</span>

                <span class="spades">&spades;</span>

                <span class="hearts">&hearts;</span>

                {{card.card}}</ng-template>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  trumpOrder = trumpOrder;
  pointTable = pointTable;
  failTable = failTable;

  lock

  boundResize


  formatCardText(trump): string {
    return `<span class="suit ${trump.suit}">&${trump.suit};</span>`;
  }

  ngOnInit(): void {
    this.boundResize = this.resize.bind(this)
    window.addEventListener('resize', this.boundResize);
    this.resize();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.boundResize)
  }

  resize(): void {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  async onDoubleClick() {
    console.log('double clicked');
    if (document.fullscreen) {
      this.lock?.release()
      document.exitFullscreen();
    } else {
      try {
        // @ts-ignore
        this.lock = await navigator.wakeLock.request('screen');
        console.log(this.lock);
      }catch(e) {
        console.log(e);
      }
      document.documentElement.requestFullscreen();
    }
  }
}
