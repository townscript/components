import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ts-progress-spinner',
  templateUrl: './ts-progress-spinner.component.html',
  styleUrls: ['./ts-progress-spinner.component.scss']
})
export class TsProgressSpinnerComponent implements OnInit {

  @Input() diameter = 50;
  @Input() mode = 'indeterminate';
  @Input() value = 0;
  constructor() { }

  ngOnInit() {
  }

}
