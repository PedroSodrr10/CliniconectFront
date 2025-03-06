import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HeaderComponent } from './view/components/template/header/header.component';
import { FooterComponent } from './view/components/template/footer/footer.component';
import { NavComponent } from './view/components/template/nav/nav.component';
import { HomeComponent } from './view/components/home/home.component';
import { ProfissionalReadComponent } from './view/components/profissional/profissional-read/profissional-read.component';
import { ProfissionalCreateComponent } from './view/components/profissional/profissional-create/profissional-create.component';
import { ProfissionalUpdateComponent } from './view/components/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './view/components/profissional/profissional-delete/profissional-delete.component';
import { PacienteReadComponent } from './view/components/cliente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './view/components/cliente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './view/components/cliente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './view/components/cliente/paciente-delete/paciente-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProfissionalReadComponent,
    ProfissionalCreateComponent,
    ProfissionalUpdateComponent,
    ProfissionalDeleteComponent,
    PacienteReadComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent,
    PacienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
