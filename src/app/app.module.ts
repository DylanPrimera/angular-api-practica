import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { TareasComponent } from './tareas/tareas.component';
import {HttpClientModule} from "@angular/common/http";
import { TareaIndividualComponent } from './tarea-individual/tarea-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieDePaginaComponent,
    TareasComponent,
    TareaIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
