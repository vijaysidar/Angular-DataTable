import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SecdatatableComponent } from './secdatatable/secdatatable.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AgGridModule } from 'ag-grid-angular';
import { ThirdtableComponent } from './thirdtable/thirdtable.component';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    SecdatatableComponent,
    CalendarComponent,
    ThirdtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    DataTablesModule,
    AgGridModule.withComponents([])
    //ScheduleModule,RecurrenceEditorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
