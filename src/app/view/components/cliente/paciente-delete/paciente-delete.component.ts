import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {
  id_pac = '';

  paciente: Paciente = {
    id: '',
    pacNome: '',
    pacEmail: '',
    pacMotivo: '',
    pacTelefone: ''

  }

  constructor(    
      private router : Router,
      private service: PacienteService,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_pac = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  update(): void {
    this.service.update(this.paciente).subscribe((resposta) => {
      this.router.navigate(['paciente'])
      this.service.message('Paciente atualizado com sucesso!')
    })
  }

  delete(): void {
    this.service.delete(this.id_pac).subscribe((resposta) => {
      this.router.navigate(['paciente'])
      this.service.message('Paciente foi deletado!')
    }, err => {
      console.log(err);
    })
  }

  findById(): void {
    this.service.findById(this.id_pac).subscribe(resposta => {
      this.paciente = resposta;
    });
  }

  cancel(): void{
    this.router.navigate(['/paciente'])
  }
}
