import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/components/home/home.component';
import { ProfissionalReadComponent } from './view/components/profissional/profissional-read/profissional-read.component';
import { ProfissionalCreateComponent } from './view/components/profissional/profissional-create/profissional-create.component';
import { ProfissionalUpdateComponent } from './view/components/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './view/components/profissional/profissional-delete/profissional-delete.component';
import { PacienteReadComponent } from './view/components/cliente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './view/components/cliente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './view/components/cliente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './view/components/cliente/paciente-delete/paciente-delete.component';


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
  },
  {
    path: 'paciente',
    component: PacienteReadComponent
  },
  {
    path: 'paciente/create',
    component: PacienteCreateComponent
  },
  {
    path: 'paciente/update/:id',
    component: PacienteUpdateComponent
  },
  {
    path: 'paciente/delete/:id',
    component: PacienteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
