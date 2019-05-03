import { AppPage } from './app.po';

describe('Townscript Elements App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should ask name', () => {
    expect(page.getNameElement()).toBeDefined();
  });

  it('should ask gender', () => {
    expect(page.getGenderElement()).toBeDefined();
  });

  it('should ask card number', () => {
    expect(page.getCardElement()).toBeDefined();
  });

  it('should ask card expiry', () => {
    expect(page.getExpiryElement()).toBeDefined();
  });

  it('should ask card cvc', () => {
    expect(page.getCVCElement()).toBeDefined();
  });

  it('should display proceed button', () => {
    expect(page.getButtonElement()).toBeDefined();
  });
});
