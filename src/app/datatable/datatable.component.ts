import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  public data = [
    {id:"101",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"102",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"103",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"104",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"105",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"106",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"107",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"108",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"109",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"110",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"111",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {id:"112",name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}}
