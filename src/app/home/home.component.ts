import { Component } from '@angular/core';

@Component({
  selector: 'sh-home',
  styles: [`

  `],
  template: `
      <div>Hello from Home</div>
      <a [routerLink]="'/cheat'">Cheat Sheat</a>
  `,
})
export class HomeComponent {
}
