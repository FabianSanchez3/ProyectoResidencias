import { Component, ViewChild, ElementRef } from '@angular/core';

import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  constructor() { }

  ngOnInit(){
  }

  Inventario = [
    { id: 1, name: 'ReporteInventario', tipo: 'Uno' },
    { id: 2, name: 'ReportePesadas', tipo: 'Dos' },
    { id: 3, name: 'ReporteConsumos', tipo: 'Tres' },
    { id: 4, name: 'ReporteGranjas', tipo: 'Cuatro' },
    { id: 5, name: 'Reporte', tipo: 'Cinco' },
  ];
  //Generar XLS
  name = 'Reporte.xls'; // Nombre del archivo Excel que se generará.

  exportToExcel(): void {
    // Obtén una referencia al elemento de la tabla por su ID.
    let element = document.getElementById('inv-tble');
    
    // Convierte la tabla HTML en un objeto WorkSheet de Excel utilizando XLSX.
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    
    // Crea un nuevo libro de Excel (WorkBook).
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    
    // Agrega la hoja de trabajo (WorkSheet) al libro de Excel con un nombre ("book").
    XLSX.utils.book_append_sheet(book, worksheet, 'book');
    
    // Guarda el libro de Excel en un archivo con el nombre especificado.
    XLSX.writeFile(book, this.name);
  }
  

  //Generar PDF
  generarPDF(): void {
    // Crea un nuevo objeto jsPDF.
    const doc = new jsPDF();
  
    // Define las opciones de la tabla utilizando la función autoTable de jsPDF-AutoTable.
    autoTable(doc, {
      head: [['Id', 'Name', 'Tipo']], // Encabezado de la tabla.
      body: this.Inventario.map(item => [item.id, item.name, item.tipo]), // Datos de la tabla.
    });
  
    // Guarda el archivo PDF con un nombre especificado ('ReporteInventario.pdf' en este caso).
    doc.save('ReporteInventario.pdf');
  }
  
}



