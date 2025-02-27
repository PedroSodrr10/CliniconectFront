import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profissional } from 'src/app/models/Profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-delete',
  templateUrl: './profissional-delete.component.html',
  styleUrls: ['./profissional-delete.component.css']
})
export class ProfissionalDeleteComponent implements OnInit {
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

  delete(): void {
    this.service.delete(this.id_profis).subscribe((resposta) => {
      this.router.navigate(['profissional'])
      this.service.message('Profissional foi deletado!')
    }, err => {
      console.log(err);
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
}
