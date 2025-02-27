import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/models/Profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-update',
  templateUrl: './profissional-update.component.html',
  styleUrls: ['./profissional-update.component.css']
})
export class ProfissionalUpdateComponent implements OnInit {

  id_profis = '';

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
      private service: ProfissionalService,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_profis = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  update(): void {
    this.service.update(this.profissional).subscribe((resposta) => {
      this.router.navigate(['profissional'])
      this.service.message('Profissional atualizado com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_profis).subscribe(resposta => {
      this.profissional = resposta;
    })
  }

  cancel(): void{
    this.router.navigate(['/profissional'])
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
