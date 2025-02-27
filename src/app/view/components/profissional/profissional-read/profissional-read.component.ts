import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Profissional } from "../../../../models/Profissional";
import { ProfissionalService } from "src/app/service/profissional.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profissional-read",
  templateUrl: "./profissional-read.component.html",
  styleUrls: ["./profissional-read.component.css"],
})
export class ProfissionalReadComponent implements AfterViewInit {
  profissional: Profissional[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "cidade",
    "horario",
    "especialidade",
    "infoAdicional",
    "action"
  ];
  dataSource = new MatTableDataSource<Profissional>(this.profissional);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ProfissionalService, private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.profissional = resposta;
      this.dataSource = new MatTableDataSource<Profissional>(this.profissional);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(["profissional/create"]);
  }
}
