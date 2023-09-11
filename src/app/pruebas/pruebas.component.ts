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
  name = 'Reporte.xls';
  exportToExcel(): void {
    let element = document.getElementById('inv-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'book');

    XLSX.writeFile(book, this.name);
  }


  //Generar PDF
  generarPDF(): void {

    const doc = new jsPDF();

    // Define las opciones de la tabla
   
    autoTable(doc, {
      head: [['Id', 'Name', 'Tipo']],
      body: this.Inventario.map(item => [item.id, item.name, item.tipo]),
      didDrawCell: (data) => { },
  });

    // Guarda el archivo PDF
    doc.save('ReporteInventario.pdf');
  }
}



