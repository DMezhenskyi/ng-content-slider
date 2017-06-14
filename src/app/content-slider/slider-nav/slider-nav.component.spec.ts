import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNavComponent } from './slider-nav.component';

describe('SliderNavComponent', () => {
  let component: SliderNavComponent;
  let fixture: ComponentFixture<SliderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
