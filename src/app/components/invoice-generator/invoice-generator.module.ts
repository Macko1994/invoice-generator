import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuModule} from "../menu/menu.module";

import {NewInvoiceComponent} from "./components/new-invoice/new-invoice.component";
import {InvoicePreviewComponent} from "./components/invoice-preview/invoice-preview.component";


@NgModule({
  declarations: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ]
})
export class InvoiceGeneratorModule { }
