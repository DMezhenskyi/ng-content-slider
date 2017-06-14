import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderComponent } from './content-slider.component';
import { SlideComponent } from './slide/slide.component';
import { SliderNavComponent } from './slider-nav/slider-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentSliderComponent,
    SlideComponent,
    SliderNavComponent
  ],
  exports: [
    ContentSliderComponent,
    SlideComponent,
    SliderNavComponent
  ]
})
export class ContentSliderModule { }
