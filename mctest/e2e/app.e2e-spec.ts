import { MctestPage } from './app.po';

describe('mctest App', function() {
  let page: MctestPage;

  beforeEach(() => {
    page = new MctestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
