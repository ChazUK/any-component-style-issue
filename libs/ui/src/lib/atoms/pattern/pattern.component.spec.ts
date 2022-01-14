import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatternComponent } from './pattern.component';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('PatternComponent', () => {
  let component: PatternComponent;
  let fixture: ComponentFixture<PatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatternComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default `palette` should be `red`', () => {
    expect(component.palette).toBe('red');
  });

  it('default `position` should be `center`', () => {
    expect(component.position).toBe('center');
  });

  it('default `transparent` should be `false`', () => {
    expect(component.transparent).toBeFalsy();
  });

  it('should correctly Host Bind `class` with BEM modifiers', () => {
    const palette = 'dark-red';
    const position = 'left';
    const transparent = true;
    component.palette = palette;
    component.position = position;
    component.transparent = transparent;

    expect(component.classes).toBe(
      `eds-base-pattern eds-base-pattern--${palette} eds-base-pattern--${position} eds-base-pattern--transparent`,
    );
  });

  it('should update `height$` subscription with new height on `OnInit` lifecycle hook', () => {
    expect(component['height$'].value).not.toBeNull();
  });

  it('should update `position$` subscription with new position', () => {
    component.position = 'left';
    const changes: SimpleChanges = {
      position: new SimpleChange(undefined, 'left', true),
    };
    component.ngOnChanges(changes);

    expect(component['position$'].value).toBe('left');
  });

  it('should calculate right hand `offset`', () => {
    component['height$'].next(200);
    component['position$'].next('right');
    expect(component.offset).toBe('translateX(279px)');
  });

  it('should calculate left hand `offset`', () => {
    component['height$'].next(200);
    component['position$'].next('left');
    expect(component.offset).toBe('translateX(73px)');
  });

  it('should set `offset` as undefined if `position` is `center`', () => {
    component['height$'].next(200);
    component['position$'].next('center');
    expect(component.offset).toBeUndefined();
  });

  it('should unsubscribe on `ngOnDestroy`', () => {
    const spy = jest.spyOn(component['subscriptions$'], 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should unobserve on `ngOnDestroy`', () => {
    const spy = jest.spyOn(component['observer'], 'unobserve');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
