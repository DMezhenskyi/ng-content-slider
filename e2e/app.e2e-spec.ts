import { NgContentSliderPage } from './app.po';

describe('ng-content-slider App', () => {
  let page: NgContentSliderPage;

  beforeEach(() => {
    page = new NgContentSliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
