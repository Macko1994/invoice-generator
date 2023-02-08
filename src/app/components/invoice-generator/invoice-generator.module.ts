import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewInvoiceComponent} from "./components/new-invoice/new-invoice.component";
import {InvoicePreviewComponent} from "./components/invoice-preview/invoice-preview.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ]
})
export class InvoiceGeneratorModule { }
