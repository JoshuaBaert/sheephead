import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheatSheetComponent } from './cheat-sheet.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: CheatSheetComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [
        CheatSheetComponent,
    ],
    providers: [],
})
export class CheatSheetModule {}
