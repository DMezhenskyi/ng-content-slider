import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-slider-nav',
  templateUrl: './slider-nav.component.html',
  styleUrls: ['./slider-nav.component.scss']
})
export class SliderNavComponent implements OnInit {

  @Output() onEmitPrev = new EventEmitter<string>();
  @Output() onEmitNext = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onShowPrev() {
    this.onEmitPrev.emit('prev');
  }

  onShowNext() {
    this.onEmitNext.emit('next');
  }

}
