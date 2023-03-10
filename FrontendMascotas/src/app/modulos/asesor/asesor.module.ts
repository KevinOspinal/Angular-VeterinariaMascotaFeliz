import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListarSOlicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaMascotasComponent,
    ListarSOlicitudesComponent,
    EditarMascotasComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }
