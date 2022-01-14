import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatternComponent } from './pattern.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PatternComponent],
  exports: [PatternComponent],
})
export class PatternModule {}
