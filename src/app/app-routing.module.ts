import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: AppComponent,
    loadChildren: './modules/game/game.module#GameModule',
  },
  {
    path: 'planets',
    component: AppComponent,
    loadChildren: './modules/planet/planet.module#PlanetModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
