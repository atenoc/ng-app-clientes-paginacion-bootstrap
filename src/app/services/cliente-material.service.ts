import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageableResponse } from '../models/PageableResponse';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteMaterialService {

  private urlEndPoint:string ="http://localhost:8080/api/clientes";

  constructor(private http : HttpClient) { }

  getClientesPaginados(page: number, size: number): Observable<PageableResponse<Cliente[]>> {
    const url = `${this.urlEndPoint}?page=${page}&size=${size}`;
    return this.http.get<PageableResponse<Cliente[]>>(url);
  }
}
