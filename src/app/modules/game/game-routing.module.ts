import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GameInitialComponent } from './game-initial/game-initial.component';
import { GameExampleComponent } from './game-example/game-example.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'start-game'
    },
    {
        path: 'start-game',
        component: GameInitialComponent
    },
    {
        path: ':id',
        component: GameExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule { }
