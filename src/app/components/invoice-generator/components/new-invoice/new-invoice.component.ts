import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // TODO:
  //  1. Przy każdym naciśnięciu przycisku submit powinny się ustawiać wartości w serwisie (setInvoiceData) i przekierowywać na drugą stronę
  //  2. Przy routingu (przełączaniu między linkami) wartości w serwisie powinny się zerować (setInvoiceData(null))
  //  3. Stworzenie formularza według wytycznych

}
