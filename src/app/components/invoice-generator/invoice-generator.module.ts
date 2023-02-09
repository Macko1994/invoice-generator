import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

import {NewInvoiceComponent} from "./components/new-invoice/new-invoice.component";
import {InvoicePreviewComponent} from "./components/invoice-preview/invoice-preview.component";


@NgModule({
  declarations: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ]
})
export class InvoiceGeneratorModule { }
