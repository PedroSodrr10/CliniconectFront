import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

 id_pac = '';
 
   paciente: Paciente = {
     id: '',
     pacNome: '',
     pacEmail: '',
     pacTelefone: '',
     pacMotivo: ''
   }
 
   pacNome = new FormControl('', [Validators.minLength(5)])
   pacEmail = new FormControl('', [Validators.minLength(5)])
   pactelefone = new FormControl('', [Validators.minLength(5)])
   pacMotivo = new FormControl('', [Validators.minLength(5)])
   
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
 
   findById(): void {
     this.service.findById(this.id_pac).subscribe(resposta => {
       this.paciente = resposta;
       this.paciente.id = this.id_pac;
     })
   }
 
   cancel(): void{
     this.router.navigate(['/paciente'])
   }
 
   errorValidNome() {
     if(this.pacNome.invalid) {
       return 'Insira um nome válido';
     }
     return false;
   }

   errorValidEmail() {
    if(this.pacEmail.invalid) {
      return 'Insira um email válido';
    }
    return false;
  }

  errorValidMotivo() {
    if(this.pacMotivo.invalid) {
      return 'Insira motivo válido';
    }
    return false;
  }

  errorValidTelefone() {
    if(this.pactelefone.invalid) {
      return 'Insira telefone válido';
    }
    return false;
  }
 }