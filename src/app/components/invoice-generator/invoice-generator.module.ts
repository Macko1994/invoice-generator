import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";

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
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    NewInvoiceComponent,
    InvoicePreviewComponent
  ]
})
export class InvoiceGeneratorModule { }
