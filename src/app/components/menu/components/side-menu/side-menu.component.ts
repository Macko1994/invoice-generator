import {Component} from '@angular/core';
import {InvoiceService} from "../../../invoice-generator/service/invoice.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(private invoiceService: InvoiceService) {
  }

  clearInvoice(): void {
    this.invoiceService.setInvoiceData([]);
  }
}
