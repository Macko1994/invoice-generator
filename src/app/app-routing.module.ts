import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewInvoiceComponent} from "./components/invoice-generator/components/new-invoice/new-invoice.component";
import {InvoicePreviewComponent} from "./components/invoice-generator/components/invoice-preview/invoice-preview.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/new-invoice' },
  { path: 'new-invoice', component: NewInvoiceComponent },
  { path: 'preview-invoice', component: InvoicePreviewComponent },
  { path: '**', redirectTo: 'new-invoice' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
