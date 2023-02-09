import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {InvoiceService} from "../../service/invoice.service";

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {

  invoiceForm!: FormGroup;

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.invoiceForm = new FormGroup({
      invoices: new FormArray([this.generateFormGroup()]),
    });
  }

  private generateFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      count: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000)
      ])
    })
  }

  get controls() {
    return (this.invoiceForm.get('invoices') as FormArray).controls;
  }

  onAddInvoice(): void {
    (this.invoiceForm.get('invoices') as FormArray).push(this.generateFormGroup());
  }

  onItemDelete(index: number): void {
    (this.invoiceForm.get('invoices') as FormArray).removeAt(index);
  }

  onSubmit(): void {
    if (!(this.controls).length) {
      this.openSnackBar('Please add items', 'OK');
      return;
    }

    this.controls.forEach((control: AbstractControl) => {
      if (control.get('name')?.invalid) {
        control.get('name')?.markAsTouched();
      }
      if (control.get('count')?.invalid) {
        control.get('count')?.markAsTouched();
      }
      if (control.get('price')?.invalid) {
        control.get('price')?.markAsTouched();
      }
    });

    if (this.invoiceForm.valid) {
      this.invoiceService.setInvoiceData((this.invoiceForm.get('invoices') as FormArray).value);
      this.router.navigate(['/preview-invoice']);
    }
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }
}
