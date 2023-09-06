import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-pesadas',
  templateUrl: './reporte-pesadas.component.html',
  styleUrls: ['./reporte-pesadas.component.css']
})
export class ReportePesadasComponent {
  titulo: string | undefined;
  descripcion: string | undefined;

  generarReporte() {
    // Aquí puedes agregar la lógica para enviar el reporte al servidor o realizar cualquier otra acción que desees.
    console.log('Reporte generado:', this.titulo, this.descripcion);
  }

}
