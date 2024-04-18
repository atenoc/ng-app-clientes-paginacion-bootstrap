import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  //Para comunicarnos el el servidor Backend
import { map } from 'rxjs/operators';
import { PageableResponse } from '../models/PageableResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string ="http://localhost:8080/api/clientes"; //urlEndPoint del servidor de Spring

  constructor(private http : HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map (response => response as Cliente[])   //Tomamos el formato json y lo casteamos un arreglo de tipo Cliente
    )
  }
  
  /*
  getClientesPaginados(page: number, size: number): Observable<Cliente[]> {
    const url = `${this.urlEndPoint}?page=${page}&size=${size}`;
    return this.http.get<Cliente[]>(url);
  }*/

  

// ...

  getClientesPaginados(page: number, size: number): Observable<PageableResponse<Cliente[]>> {
    const url = `${this.urlEndPoint}?page=${page}&size=${size}`;
    return this.http.get<PageableResponse<Cliente[]>>(url);
  }


}
