import { NgMoviePage } from './app.po';

describe('ng-movie App', () => {
  let page: NgMoviePage;

  beforeEach(() => {
    page = new NgMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
