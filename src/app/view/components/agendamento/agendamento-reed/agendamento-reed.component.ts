import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/service/agendamento.service';

@Component({
  selector: 'app-agendamento-reed',
  templateUrl: './agendamento-reed.component.html',
  styleUrls: ['./agendamento-reed.component.css']
})
export class AgendamentoReedComponent implements AfterViewInit {
  agendamento: Agendamento[] = [];

  displayedColumns: string[] = [
    "agdId",
    "paciente",
    "agdMotivo",
    "profissional",
    "agdDataHora",
    "action"
  ];
  dataSource = new MatTableDataSource<Agendamento>(this.agendamento);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: AgendamentoService, private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.agendamento = resposta;
      this.dataSource = new MatTableDataSource<Agendamento>(this.agendamento);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(["agendamento/create"]);
  }
}