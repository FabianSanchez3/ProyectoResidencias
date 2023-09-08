import { Component, ViewChild, ElementRef } from '@angular/core';  
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
 
  constructor() { }

  ngOnInit(): void {
  }

  // Generacon de pdf
  generatePDF() {
    const doc = new jsPDF();
    doc.text('¡Hola, mundo!', 10, 10);
    doc.save('ejemplo.pdf');
  }


  // Generacon de XLS
  Seasons = [
    { id: 1, name: 'Spring', fruit: 'Orange' },
    { id: 2, name: 'Summer', fruit: 'Mango' },
    { id: 3, name: 'Winter', fruit: 'Apple' },
    { id: 4, name: 'Autumn', fruit: 'Banana' },
  ];

  name = 'Reporte.xls';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}
 
