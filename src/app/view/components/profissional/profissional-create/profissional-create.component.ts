import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/Profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {

  profissional: Profissional = {
    id: '',
    nome: 'jhony',
    endereco: 'teste',
    cidade: 'londrina',
    estado: 'teste',
    especialidade: 'Fisioterapeuta',
    horario: '8 as 17',
    infoAdicional: 'Fisioterapeuta'

  }

  constructor(
    private router : Router,
    private service: ProfissionalService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['/profissional'])
  }

  create():void {
    this.service.create(this.profissional).subscribe((resposta) => {
      this.router.navigate(['/profissional'])
      this.service.message('Profissional criado com sucesso!')
    }, err => {
      console.log(err)
      if(err.error.error.match('Já cadastrado')) {
        this.service.message(err.error.error)
      }
    })
  }

}
