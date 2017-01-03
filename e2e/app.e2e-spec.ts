import { Ng2dashPage } from './app.po';

describe('ng2dash App', function() {
  let page: Ng2dashPage;

  beforeEach(() => {
    page = new Ng2dashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
