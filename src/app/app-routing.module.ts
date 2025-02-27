import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/components/home/home.component';
import { ProfissionalReadComponent } from './view/components/profissional/profissional-read/profissional-read.component';
import { ProfissionalCreateComponent } from './view/components/profissional/profissional-create/profissional-create.component';
import { ProfissionalUpdateComponent } from './view/components/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './view/components/profissional/profissional-delete/profissional-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profissional',
    component: ProfissionalReadComponent
  },
  {
    path: 'profissional/create',
    component: ProfissionalCreateComponent
  },
  {
    path: 'profissional/update/:id',
    component: ProfissionalUpdateComponent
  },
  {
    path: 'profissional/delete/:id',
    component: ProfissionalDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
