import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { PlanetRoutingModule } from './planet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
