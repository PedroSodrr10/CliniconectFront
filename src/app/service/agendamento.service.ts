import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Agendamento[]> {
    const url = this.baseUrl + "/agendamento";
    return this.http.get<Agendamento[]>(url);
  }

  create(agendamento : Agendamento):Observable<Agendamento> {
    const url = this.baseUrl + "/agendamento";
    return this.http.post<Agendamento>(url, agendamento);
  }

  update(agendamento : Agendamento):Observable<Agendamento> {
    const url = this.baseUrl + "/agendamento/" + agendamento.id;
    return this.http.put<Agendamento>(url, agendamento);
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/agendamento/${id}`;
    return this.http.delete<void>(url);
  }

  findById(id: any):Observable<Agendamento> {
    const url = this.baseUrl + "/agendamento/" + id;
    return this.http.get<Agendamento>(url);
  }

  message(msg: string): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
