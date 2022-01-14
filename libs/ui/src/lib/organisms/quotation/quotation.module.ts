import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuotationComponent } from './quotation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuotationComponent],
  exports: [QuotationComponent],
})
export class QuotationModule {}
