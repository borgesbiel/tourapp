import { TourappPage } from './app.po';

describe('tourapp App', () => {
  let page: TourappPage;

  beforeEach(() => {
    page = new TourappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
