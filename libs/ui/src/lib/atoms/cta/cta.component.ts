import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import classNames from 'classnames';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[eds-base-cta],button[eds-base-cta]',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CTAComponent {
  @Input() icon!: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() small!: boolean;
  @Input() onDark!: boolean;

  @HostBinding('class') get classes() {
    return classNames('eds-base-cta', {
      'eds-base-cta--secondary': this.variant === 'secondary',
      'eds-base-cta--icon': this.icon,
      'eds-base-cta--icon-right': this.icon && this.iconPosition === 'right',
      'eds-base-cta--small': this.small,
      'eds-base-cta--dark': this.onDark,
    });
  }
}
