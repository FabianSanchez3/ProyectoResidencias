import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';



@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  constructor() { }

  ngOnInit(): void {
  }


  // Informacion a exportar
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
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }


  //Generar PDF
  generarPDF(): void {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Definir la posición inicial para el contenido
    let y = 10;

    // Agregar encabezado
    doc.setFontSize(16);
    doc.text('Reporte de Inventario', 10, y);
    y += 10; // Incrementar la posición en Y

    // Crear una tabla manualmente
    const headers = ['ID', 'Nombre', 'Tipo'];
    const data = this.Inventario.map((item) => [item.id.toString(), item.name.toString(), item.tipo.toString()]);

    // Definir el ancho de las columnas
    const colWidths = [10,10,20];

    // Agregar encabezados
    doc.setFontSize(12);
    doc.text(headers.join('\t'), 10, y);
    y += 10; // Incrementar la posición en Y

    // Agregar datos de la tabla
    doc.setFontSize(10);
    data.forEach((row) => {
      for (let i = 0; i < row.length; i++) {
        doc.text(row[i], 10 + i * colWidths[i], y);
      }
      y += 10; // Incrementar la posición en Y para la siguiente fila
    });

    // Guardar el archivo PDF
    doc.save('ReporteInventario.pdf');
  }
}



