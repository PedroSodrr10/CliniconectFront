import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissional } from '../models/Profissional';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Profissional[]> {
    const url = this.baseUrl + "/profissional";
    return this.http.get<Profissional[]>(url);
  }

  findById(id: any):Observable<Profissional> {
    const url = this.baseUrl + "/profissional/" + id;
    return this.http.get<Profissional>(url);
  }

  create(profissional : Profissional):Observable<Profissional> {
    const url = this.baseUrl + "/profissional";
    return this.http.post<Profissional>(url, profissional);
  }

  update(profissional : Profissional):Observable<Profissional> {
    const url = this.baseUrl + "/profissional/" + profissional.id;
    return this.http.put<Profissional>(url, profissional);
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/profissional/${id}`;
    return this.http.delete<void>(url);
  }
  

  message(msg: string): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
  
}
