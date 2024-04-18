import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [];
  currentPage = 0;
  itemsPerPage = 5;
  totalItems = 0;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.clienteService.getClientesPaginados(this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        console.log('Página actual:', this.currentPage);
        console.log(response);
        this.clientes = response.content; // Acceder a la propiedad "content"
        this.totalItems = response.totalElements;
      });
  }
  
}
