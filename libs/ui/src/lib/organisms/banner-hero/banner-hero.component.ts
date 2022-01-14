import { Component, HostBinding, Input } from '@angular/core';
import classNames from 'classnames';
import { CTALink } from '../../atoms/cta';

@Component({
  selector: 'eds-base-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.scss'],
})
export class BannerHeroComponent {
  @Input() title!: string;
  @Input() body?: string;
  @Input() set image(value: string) {
    this._image = value;
    this.transparent = !!value;
  }
  get image(): string {
    return this._image;
  }
  @Input() showPattern = false;
  @Input() cta!: CTALink;

  public transparent = false;
  private _image!: string;

  @HostBinding('class') get classes() {
    return classNames('eds-base-banner-hero', {
      'eds-base-banner-hero--with-pattern': this.showPattern,
    });
  }
}
