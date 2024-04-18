import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './services/cliente.service';
import { RouterModule, Routes } from '@angular/router'; //Para movernos entre modulos del Menu
import { HttpClientModule} from '@angular/common/http'; //Para conectarnos al servidor backend
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ClienteMaterialComponent } from './cliente-material/cliente-material.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes =[
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas', component:DirectivaComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes-material', component:ClienteMaterialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ClienteMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PaginationModule.forRoot(),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    NoopAnimationsModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
