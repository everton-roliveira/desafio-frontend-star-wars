import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, FooterComponent } from './components';

const COMPONENTS_LAYOUT = [
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS_LAYOUT
  ],
  imports: [CommonModule,],
  exports: [...COMPONENTS_LAYOUT]
})
export class CoreModule { }
