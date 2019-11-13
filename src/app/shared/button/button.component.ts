import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sh-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() buttonText = `I'm a little teapot`;

    @Output() buttonClick = new EventEmitter();

    handleClick() {
        this.buttonClick.emit();
    }
}
