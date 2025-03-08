import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../../../service/profissional.service';
import { Profissional } from 'src/app/models/Profissional';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from 'src/app/models/Paciente';
import { AgendamentoService } from 'src/app/service/agendamento.service';
import { Agendamento } from 'src/app/models/agendamento';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})
export class AgendamentoCreateComponent implements OnInit {

  agendamento: Agendamento = {
    agdMotivo: '',
    agdpaciente: '',
    agdProfissional: '',
    agdDataHora: ''  
  };

  agdpaciente = new FormControl('', [Validators.minLength(5)])
  agdProfissional = new FormControl('', [Validators.minLength(5)])
  agdMotivo = new FormControl('', [Validators.minLength(5)])

  profissional: Profissional[] = [];
  paciente: Paciente[] = [];

  constructor(
    private profisService: ProfissionalService,
    private pacienteService: PacienteService,
    private agendamService: AgendamentoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.listarprofissionais();
    this.listarPacientes();
  }

  listarprofissionais(): void {
    this.profisService.findAll().subscribe(resposta => {
      this.profissional = resposta;
    });
  }

  listarPacientes(): void {
    this.pacienteService.findAll().subscribe(resposta => {
      this.paciente = resposta;
    });
  }

  cancel(): void{
    this.router.navigate(['/agendamento'])
  }

  create():void {
    this.agendamService.create(this.agendamento).subscribe((resposta) => {
      this.router.navigate(['/agendamento'])
      this.agendamService.message('Consulta agendada com sucesso!')
    }, err => {
      console.log(err)
      if(err.error.error.match('Consulta já marcada')) {
        this.agendamService.message(err.error.error)
      }
    })
  }

  errorValidPac() {
    if(this.agdpaciente.invalid) {
      return 'Selecione um Paciente!';
    }
    return false;
  }

  errorValidProfis() {
    if(this.agdProfissional.invalid) {
      return 'Selecione um Profissional!';
    }
    return false;
  }

  errorValidMotivo() {
    if(this.agdMotivo.invalid) {
      return 'Informe um motivo para a consulta!';
    }
    return false;
  }

}
