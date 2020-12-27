import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secdatatable',
  templateUrl: './secdatatable.component.html',
  styleUrls: ['./secdatatable.component.css']
})
export class SecdatatableComponent implements OnInit {

  ngOnInit() {
    let table = $('#example').DataTable({
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
            this.nextButtonClickEvent();
          });
      }
    });
  }

  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }

  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
    console.log('previous clicked')
  }


}
