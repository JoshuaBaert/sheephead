import { Component } from '@angular/core';

@Component({
    selector: 'sh-cheat',
    styles: [`

    `],
    template: `
        <div>Hello from Cheat</div>
        <router-outlet></router-outlet>
        <br/>
        {{count}}
        <br/>
        <sh-button [buttonText]="'countUp'" (buttonClick)="countUp()"></sh-button>
        <sh-button [buttonText]="'countDown'" (buttonClick)="countDown()"></sh-button>
    `,
})
export class CheatSheetComponent {
    product;

    count = 1;

    countUp() {
        this.count++;
    }
    countDown() {
        this.count--;
    }
}

