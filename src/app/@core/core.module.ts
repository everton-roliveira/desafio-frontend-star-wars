import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, FooterComponent } from './components';
import { RouterModule } from '@angular/router';

const COMPONENTS_LAYOUT = [
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS_LAYOUT
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS_LAYOUT]
})
export class CoreModule { }
