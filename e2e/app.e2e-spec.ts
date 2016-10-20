import { BeeryardPage } from './app.po';

describe('beeryard App', function() {
  let page: BeeryardPage;

  beforeEach(() => {
    page = new BeeryardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
