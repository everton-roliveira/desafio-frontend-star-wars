
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, SidebarComponent } from './components';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ApiService, JwtService, PlanetService } from './services';


const COMPONENTS_LAYOUT = [
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...COMPONENTS_LAYOUT
  ],
  exports: [
    ...COMPONENTS_LAYOUT
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    PlanetService
  ],
})
export class CoreModule { }