import { Component, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  constructor() { }

  ngOnInit() {
  }

  selectedDate: string = ''; // Propiedad para almacenar la fecha seleccionada (formato YYYY-MM-DD)

  mostrarFecha() {
    console.log('Fecha seleccionada:', this.selectedDate);
  }

  mostrarfechaseleccionada() {
    console.log('Fecha seleccionada:', this.selectedDate);
  }


  selectedOption: string = ''; // Propiedad para almacenar la opción seleccionada

  mostrarSeleccion() {
    console.log('Opción seleccionada:', this.selectedOption);
  }

  Inventario = [
    { id: 1, name: 'ReporteInventario', tipo: 'Uno' },
    { id: 2, name: 'ReportePesadas', tipo: 'Dos' },
    { id: 3, name: 'ReporteConsumos', tipo: 'Tres' },
    { id: 4, name: 'ReporteGranjas', tipo: 'Cuatro' },
    { id: 5, name: 'Reporte', tipo: 'Cinco' },
  ];


  //Generar XLS
  exportToExcel(): void {
    // Paso 1: Convierte la matriz Inventario en una hoja de trabajo de Excel (WorkSheet).
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.Inventario);
  
    // Paso 2: Crea un nuevo libro de Excel (WorkBook).
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
    // Paso 3: Agrega la hoja de trabajo al libro con un nombre específico ('Inventario' en este caso).
    XLSX.utils.book_append_sheet(wb, ws, 'Inventario');
  
    // Paso 4: Guarda el archivo Excel con un nombre especificado ('Inventario.xlsx' en este caso).
    XLSX.writeFile(wb, 'InventarioExcell.xlsx');
  }
  


  //Generar PDF
  generarPDF(): void {
    // Crea un nuevo objeto jsPDF.
    const doc = new jsPDF();

    // Define las opciones de la tabla utilizando la función autoTable de jsPDF-AutoTable.
    autoTable(doc, {
      head: [['Id', 'Name', 'Tipo']], // Encabezado de la tabla.
      body: this.Inventario.map(item => [item.id, item.name, item.tipo]), // Datos de la tabla.
      didDrawCell: (data) => { }, // Función opcional que se ejecuta después de dibujar una celda.
    });

    // Guarda el archivo PDF con un nombre especificado ('ReporteInventario.pdf' en este caso).
    doc.save('ReporteInventarioPDF.pdf');
  }





}



