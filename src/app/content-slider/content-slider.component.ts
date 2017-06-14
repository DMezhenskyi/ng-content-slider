import {
  AfterViewInit, Component, ContentChildren, ElementRef, HostListener, Input, OnInit,
  QueryList
} from '@angular/core';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'ng-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent implements OnInit, AfterViewInit {

  @Input() slidesToShow = 2;
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  activePage = 0;
  private _offset = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._setSlideWidth();
  }

  get pagesCount(): number {
    return Math.ceil(this.slides.length / this.slidesToShow);
  };

  get containerSize (): number {
    return +this.el.nativeElement.offsetWidth;
  }
  get slideSize (): number {
    return this.containerSize / this.slidesToShow;
  }

  get offset(): number {
    return this._offset;
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._setSlideWidth();
      this._setActiveSlides();
    }, 0);

  }

  showPrevPage(action: string): void {
    if (this.activePage === 0) { return; }
    this._offset = this._offset + this._calculateOffset();
    this.activePage--;
  }

  showNextPage(action: string): void {
   if (this.activePage === this.pagesCount - 1) { return; }
   this.activePage++;
   this._offset = this._offset - this._calculateOffset();

  }

  private _calculateOffset(): number {
    console.log(this.slides.toArray().splice(this.activePage * this.slidesToShow, this.slidesToShow).length);
    return this.slides.toArray().splice(this.activePage * this.slidesToShow, this.slidesToShow).length * this.slideSize;
  }

  private _setActiveSlides(): void {
    for (const slide of this.slides.toArray().splice(0, this.slidesToShow)) {
      slide.classActive = true;
    }
  }

  private _setSlideWidth(): void {
    for (const slide of this.slides.toArray()) {
      slide.slideSize = this.slideSize - parseInt(window.getComputedStyle(slide.slideRef).marginLeft, 10)
        - parseInt(window.getComputedStyle(slide.slideRef).marginRight, 10);
    }
  }

}
