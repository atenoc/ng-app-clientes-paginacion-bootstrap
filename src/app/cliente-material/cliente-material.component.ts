import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Cliente } from '../models/cliente';
import { ClienteMaterialService } from '../services/cliente-material.service';

@Component({
  selector: 'app-cliente-material',
  templateUrl: './cliente-material.component.html',
  styleUrls: ['./cliente-material.component.css']
})
export class ClienteMaterialComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Cliente>;
  clientes: Cliente[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private clienteService: ClienteMaterialService) {}

  ngAfterViewInit() {
    this.clienteService.getClientesPaginados(0, 10).subscribe((response) => {
      console.log("response.content")
      console.log(response.content)
      this.clientes = response.content;
      this.dataSource = new MatTableDataSource(this.clientes);
      this.dataSource.paginator = this.paginator;
    });
  }
}


//@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

