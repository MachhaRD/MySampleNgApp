import { AnimAppPage } from './app.po';

describe('anim-app App', () => {
  let page: AnimAppPage;

  beforeEach(() => {
    page = new AnimAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
