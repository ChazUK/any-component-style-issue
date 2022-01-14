import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CTAModule } from './atoms/cta';
import { PatternModule } from './atoms/pattern';
import { BannerHeroModule } from './organisms/banner-hero';
import { QuotationModule } from './organisms/quotation';

@NgModule({
  imports: [
    CommonModule,
    CTAModule,
    PatternModule,
    BannerHeroModule,
    QuotationModule,
  ],
  exports: [BannerHeroModule, QuotationModule],
})
export class UiModule {}
