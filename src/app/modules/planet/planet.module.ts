import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetModule { }
