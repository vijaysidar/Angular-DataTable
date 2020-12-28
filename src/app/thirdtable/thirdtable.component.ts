import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-thirdtable',
  templateUrl: './thirdtable.component.html',
  styleUrls: ['./thirdtable.component.css']
})
export class ThirdtableComponent implements OnInit {
  @ViewChild('agGrid',{static: false}) agGrid: AgGridAngular;

  columnDefs = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
