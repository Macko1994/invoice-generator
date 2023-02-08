import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/company.model";
import {Invoice} from "../model/invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceData$: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>([]);

  constructor(private http: HttpClient) {
  }

  getCompanyData(): Observable<Company> {
    return this.http.get<Company>('assets/resources/company.json');
  }

  setInvoiceData(invoiceData: Invoice[]): void {
    this.invoiceData$.next(invoiceData);
  }

  getInvoiceData(): Observable<Invoice[]> {
    return this.invoiceData$.asObservable();
  }
}
