import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ng-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @HostBinding('class.active') classActive = false;
  @HostBinding('style.width.px') slideSize: number;

  slideRef: Element;

  constructor(private el: ElementRef) {
    this.slideRef = el.nativeElement;
  }

  ngOnInit() {
  }

}
