import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/Paciente';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

paciente: Paciente = {
  id: '',
  pacNome: '',
  pacEmail: '',
  pacMotivo: '',
  pacTelefone: ''

  }

  pacNome = new FormControl('', [Validators.minLength(5)])
  pacEmail = new FormControl('', [Validators.minLength(5)])
  pacMotivo = new FormControl('', [Validators.minLength(5)])
  pacTelefone = new FormControl('', [Validators.minLength(5)])

  constructor(
    private router : Router,
    private service: PacienteService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['/paciente'])
  }

  create():void {
    this.service.create(this.paciente).subscribe((resposta) => {
      this.router.navigate(['/paciente'])
      this.service.message('Paciente cadastrado com sucesso!')
    }, err => {
      console.log(err)
      if(err.error.error.match('Já cadastrado')) {
        this.service.message(err.error.error)
      }
    })
  }

  errorValidNome() {
    if(this.pacNome.invalid) {
      return 'Insira um nome válido!';
    }
    return false;
  }

  errorValidEmail() {
    if(this.pacEmail.invalid) {
      return 'Insira um e-mail válido!';
    }
    return false;
  }

  errorValidMotivo() {
    if(this.pacMotivo.invalid) {
      return 'Insira um motivo válido!';
    }
    return false;
  }

  errorValidTelefone() {
    if(this.pacTelefone.invalid) {
      return 'Insira um telefone válido!';
    }
    return false;
  }

}
