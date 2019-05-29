import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameExampleComponent } from './game-example/game-example.component';
import { GameInitialComponent } from './game-initial/game-initial.component';
import { GameRoutingModule } from './game-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GameInitialComponent, GameExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule
  ]
})
export class GameModule { }
