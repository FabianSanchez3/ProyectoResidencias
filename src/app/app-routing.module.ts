import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ReporteConsumosComponent } from './reporte-consumos/reporte-consumos.component';
import { ReporteMortalidadesComponent } from './reporte-mortalidades/reporte-mortalidades.component';
import { ReportePesadasComponent } from './reporte-pesadas/reporte-pesadas.component';
import { ReportecierreGranjasComponent } from './reportecierre-granjas/reportecierre-granjas.component';
import {PruebasComponent} from './pruebas/pruebas.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'menu', component: MenuComponent},
  { path: 'consumos', component: ReporteConsumosComponent},
  { path: 'mortalidades', component: ReporteMortalidadesComponent},
  { path: 'pesadas', component: ReportePesadasComponent},
  { path: 'cgranjas', component: ReportecierreGranjasComponent},
  { path: 'pruebas', component: PruebasComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
