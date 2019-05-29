import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'update/:id',
        component: UpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanetRoutingModule { }
