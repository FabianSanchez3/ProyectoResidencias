import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReporteMortalidadesComponent } from './reporte-mortalidades/reporte-mortalidades.component';
import { ReportePesadasComponent } from './reporte-pesadas/reporte-pesadas.component';
import { ReporteConsumosComponent } from './reporte-consumos/reporte-consumos.component';
import { ReportecierreGranjasComponent } from './reportecierre-granjas/reportecierre-granjas.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PruebasComponent } from './pruebas/pruebas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ReporteMortalidadesComponent,
    ReportePesadasComponent,
    ReporteConsumosComponent,
    ReportecierreGranjasComponent,
    PruebasComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
