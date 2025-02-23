import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Profissional } from '../../../../models/Profissional';

@Component({
  selector: 'app-profissional-read',
  templateUrl: './profissional-read.component.html',
  styleUrls: ['./profissional-read.component.css']
})
export class ProfissionalReadComponent implements AfterViewInit {

  profissional: Profissional[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'horarios', 'info_adc'];
  dataSource = new MatTableDataSource<Profissional>(this.profissional);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


