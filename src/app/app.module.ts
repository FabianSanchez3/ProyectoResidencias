import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReporteMortalidadesComponent } from './reporte-mortalidades/reporte-mortalidades.component';
import { ReportePesadasComponent } from './reporte-pesadas/reporte-pesadas.component';
import { ReporteConsumosComponent } from './reporte-consumos/reporte-consumos.component';
import { ReportecierreGranjasComponent } from './reportecierre-granjas/reportecierre-granjas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ReporteMortalidadesComponent,
    ReportePesadasComponent,
    ReporteConsumosComponent,
    ReportecierreGranjasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
