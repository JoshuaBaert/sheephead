import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    exports: [
        ButtonComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: [],
})
export class SharedModule {}
