import { CTAComponent } from './cta.component';

describe('CTAComponent', () => {
  let component: CTAComponent;

  beforeEach(() => {
    component = new CTAComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set BEM block class', () => {
    expect(component.classes).toContain('eds-base-cta');
  });

  it('should set BEM modifier class if `variant` is `secondary`', () => {
    component.variant = 'secondary';
    expect(component.classes).toContain('eds-base-cta--secondary');
  });

  it('should set BEM modifier class if `icon` is set', () => {
    component.icon = 'icon';
    expect(component.classes).toContain('eds-base-cta--icon');
  });

  it('should set BEM modifier class if `icon` is set and `iconPosition` is `right`', () => {
    component.icon = 'icon';
    component.iconPosition = 'right';
    expect(component.classes).toContain('eds-base-cta--icon-right');
  });

  it('should set BEM modifier class if `small` is set', () => {
    component.small = true;
    expect(component.classes).toContain('eds-base-cta--small');
  });

  it('should set BEM modifier class if `dark` is set', () => {
    component.onDark = true;
    expect(component.classes).toContain('eds-base-cta--dark');
  });
});
