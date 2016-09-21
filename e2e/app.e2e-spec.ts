import { ConnectFourPage } from './app.po';

describe('connect-four App', function() {
  let page: ConnectFourPage;

  beforeEach(() => {
    page = new ConnectFourPage();
  });

  it('should display message saying Ng Connect Four', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ng Connect Four');
  });
});
