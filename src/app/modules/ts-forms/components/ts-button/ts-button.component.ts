import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: [
    './ts-button.component.scss'
  ]
})
export class TsButtonComponent implements OnInit {
  private defaultValue = 10;
  @Input()
  state = 'accent';
  @Input()
  text: string;
  @Input()
  disabled = false;
  @Input()
  width = 'inherit';

  showProgress = false;
  value = this.defaultValue;
  clicked = false;

  private _interval: any;

  constructor() { }

  ngOnInit() {
  }

  onClick = (event) => {
    this.clicked = true;
  }

  generateNumbers = () => {
    if (this.value < 90) {
      this.value += Math.floor(Math.random() * 5);
    } else if (this._interval) {
      clearInterval(this._interval);
    }
  }

  resetNumberInterval = () => {
    this.value = this.defaultValue;
  }

  get progress() {
    return this.showProgress;
  }

  @Input()
  set progress(isProgress: boolean) {

    this.showProgress = isProgress;
    this.resetNumberInterval();
    if (this.showProgress) {
      this._interval = setInterval(() => this.generateNumbers(), 100);
    } else {
      this.clicked = false;
    }
  }
}
