import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, NgZone, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'dc-scroller',
  templateUrl: './scroller.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'datatable-scroll'
  },
})
export class ScrollerComponent implements OnInit, OnDestroy {
  @Input() scrollbarV: boolean = false;
  @Input() scrollbarH: boolean = false;

  @HostBinding('style.height.px')
  @Input()
  scrollHeight: number | undefined;

  @HostBinding('style.width.px')
  @Input()
  scrollWidth: number;

  @Output() scroll: EventEmitter<any> = new EventEmitter();

  scrollYPos: number = 0;
  scrollXPos: number = 0;
  prevScrollYPos: number = 0;
  prevScrollXPos: number = 0;
  element: any;
  parentElement: any;
  onScrollListener: any;

  private _scrollEventListener: any = null;

  constructor(private ngZone: NgZone, element: ElementRef, private renderer: Renderer2) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    // manual bind so we don't always listen
    if (this.scrollbarV || this.scrollbarH) {
      const renderer = this.renderer;
      this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
      this._scrollEventListener = this.onScrolled.bind(this);
      this.parentElement.addEventListener('scroll', this._scrollEventListener);
    }
  }

  ngOnDestroy(): void {
    if (this._scrollEventListener) {
      this.parentElement.removeEventListener('scroll', this._scrollEventListener);
      this._scrollEventListener = null;
    }
  }

  setOffset(offsetY: number): void {
    if (this.parentElement) {
      this.parentElement.scrollTop = offsetY;
    }
  }

  onScrolled(event: MouseEvent): void {
    const dom: Element = <Element>event.currentTarget;
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
  }

  updateOffset(): void {
    let direction: string = '';

    if (this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if (this.scrollYPos > this.prevScrollYPos) {
      direction = 'up';
    }

    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });

    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }

}
