import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import classNames from 'classnames';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';

type PatternPalette = 'dark-red' | 'red' | 'turquoise' | 'yellow';
type PatternPosition = 'left' | 'center' | 'right';

@Component({
  selector: 'eds-base-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss'],
})
export class PatternComponent implements OnInit, OnChanges, OnDestroy {
  @Input() palette: PatternPalette = 'red';
  @Input() position: PatternPosition = 'center';
  @Input() transparent = false;

  public offset?: string;
  private height$: BehaviorSubject<number> = new BehaviorSubject(0);
  private position$: BehaviorSubject<PatternPosition> = new BehaviorSubject(
    this.position
  );
  private subscriptions$: Subscription = new Subscription();
  private β = 0.49345;
  private bSide = 387;
  private svgWidth = 460;
  private observer!: ResizeObserver;

  @HostBinding('class') get classes(): string {
    return classNames(
      'eds-base-pattern',
      `eds-base-pattern--${this.palette}`,
      `eds-base-pattern--${this.position}`,
      {
        'eds-base-pattern--transparent': this.transparent,
      }
    );
  }

  constructor(private host: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    /* istanbul ignore next */
    this.observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        this.height$.next(entries[0].contentRect.height);
      });
    });
    this.observer.observe(this.host.nativeElement);

    this.height$.next(this.host.nativeElement.offsetHeight);

    this.subscriptions$.add(
      combineLatest([this.height$, this.position$]).subscribe(
        ([height, position]) => {
          if (position === 'right') {
            /*
             * Use `tan(θ) = opposite / adjacent` to calculate
             * point where SVG meets bottom corner
             */
            this.offset = `translateX(${Math.round(
              this.bSide - Math.tan(this.β) * height
            )}px)`;
          } else if (position === 'left') {
            this.offset = `translateX(${this.svgWidth - this.bSide}px)`;
          } else {
            this.offset = undefined;
          }
        }
      )
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['position']) {
      this.position$.next(changes['position'].currentValue);
    }
  }

  ngOnDestroy() {
    this.observer.unobserve(this.host.nativeElement);
    this.subscriptions$.unsubscribe();
  }
}
