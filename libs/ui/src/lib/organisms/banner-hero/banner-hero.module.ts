import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CTAModule } from '../../atoms/cta';
import { PatternModule } from '../../atoms/pattern';
import { BannerHeroComponent } from './banner-hero.component';

@NgModule({
  imports: [CommonModule, PatternModule, CTAModule, RouterModule],
  declarations: [BannerHeroComponent],
  exports: [BannerHeroComponent],
})
export class BannerHeroModule {}
