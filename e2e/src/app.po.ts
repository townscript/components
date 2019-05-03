import { browser, by, element } from 'protractor';

export class AppPage {

  nameText = by.name('name');
  genderText = by.name('gender');
  cardNumberText = by.name('card');
  expiryText = by.name('expiry');
  cvcText = by.name('cvc');
  button = by.tagName('ts-button');

  navigateTo() {
    return browser.get('/');
  }

  getNameElement() {
    return element(this.nameText);
  }

  getGenderElement() {
    return element(this.genderText);
  }

  getCardElement() {
    return element(this.cardNumberText);
  }

  getExpiryElement() {
    return element(this.expiryText);
  }

  getCVCElement() {
    return element(this.cvcText);
  }

  getButtonElement() {
    return element(this.button);
  }
}
