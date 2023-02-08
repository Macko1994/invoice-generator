import {Component, OnDestroy, OnInit} from '@angular/core';
import {Company} from "../../model/company.model";
import {InvoiceService} from "../../service/invoice.service";
import {Subject, takeUntil} from "rxjs";
import {Invoice} from "../../model/invoice.model";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent implements OnInit, OnDestroy {

  companyData!: Company;
  invoices: Invoice[] = [];
  sum = 0;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.getCompanyData();
    this.getInvoiceData();
  }

  private getCompanyData(): void {
    this.invoiceService.getCompanyData()
      .subscribe((companyData: Company) => {
        this.companyData = companyData;
      });
  }

  private getInvoiceData(): void {
    this.invoiceService.getInvoiceData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((invoiceData: Invoice[]) => {
        if (invoiceData.length) {
          this.invoices = invoiceData;

          invoiceData.forEach((data: Invoice) => {
            this.sum += data.count * data.price;
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
