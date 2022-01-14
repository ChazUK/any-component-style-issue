import { BannerHeroComponent } from './banner-hero.component';

describe('BannerHeroComponent', () => {
  let component: BannerHeroComponent;

  beforeEach(() => {
    component = new BannerHeroComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set and get `image`', () => {
    const image = 'image.png';
    component.image = image;
    expect(component.image).toBe(image);
  });

  it('should set `transparent` to `true` if `image` is set', () => {
    component.image = 'image.png';
    expect(component.transparent).toBeTruthy();
  });

  it('should set BEM block class', () => {
    expect(component.classes).toContain('banner-hero');
  });

  it('should set BEM modifier class if `showPattern` is `true`', () => {
    component.showPattern = true;
    expect(component.classes).toContain('banner-hero--with-pattern');
  });
});
