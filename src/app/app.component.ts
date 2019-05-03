import {Component, OnInit} from '@angular/core';
import {Option} from './modules/ts-forms/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'elements';
  myName = '';
  myGender: Option;
  options: Array<Option> = [];
  myCard = '';
  myExpiry = '';
  myCVC = '';
  myRadio = '';
  showError = false;

  constructor () {
    let option: Option = {text: 'Male', value: 'Male'};
    this.options.push(option);
    option = {text: 'Female', value: 'Female'};
    this.options.push(option);
    this.myGender = option;
  }

  ngOnInit() {
  }

  onSubmit = () => {
    alert('Form submitted!');
  }
}
