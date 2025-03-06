import { Paciente } from '../../../../models/Paciente';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements AfterViewInit {
  
  paciente: Paciente[] = [];

  displayedColumns: string[] = [
    "pacId",
    "pacNome",
    "pacEmail",
    "pacMotivo",
    "pacTelefone",
    "agendamentos",
    "action"
  ];
  dataSource = new MatTableDataSource<Paciente>(this.paciente);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PacienteService, private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.paciente = resposta;
      this.dataSource = new MatTableDataSource<Paciente>(this.paciente);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(["paciente/create"]);
  }
}

