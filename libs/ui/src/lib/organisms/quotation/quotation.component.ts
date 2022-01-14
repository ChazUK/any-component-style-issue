import { Component, HostBinding, Input } from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'eds-base-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss'],
})
export class QuotationComponent {
  @Input() quote?: string;
  @Input() author?: string;
  @Input() occupation?: string;
  @Input() image?: string;
  @Input() altText?: string;

  @HostBinding('class') get classes() {
    return classNames('eds-base-quotation', {
      'eds-base-quotation--with-image': !!this.image,
    });
  }
}
