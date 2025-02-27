import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    nome: '',
    endereco: '',
    cidade: '',
    estado: '',
    especialidade: '',
    horario: '',
    infoAdicional: ''

  }

  nome = new FormControl('', [Validators.minLength(5)])
  ender = new FormControl('', [Validators.minLength(5)])
  cidade = new FormControl('', [Validators.minLength(5)])
  estado = new FormControl('', [Validators.minLength(5)])
  espec = new FormControl('', [Validators.minLength(5)])
  hora = new FormControl('', [Validators.minLength(5)])
  info = new FormControl('', [Validators.minLength(5)])

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

  errorValidNome() {
    if(this.nome.invalid) {
      return 'Insira um nome válido';
    }
    return false;
  }

  errorValidEspec() {
    if(this.espec.invalid) {
      return 'Insira uma Especialidade';
    }
    return false;
  }

}
