import { Component } from '@angular/core';

@Component({
    selector: 'sh-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    firstButton = 'First Button';

    handleButtonClick(str) {
        console.log(str + ' from app component');
    }
}
