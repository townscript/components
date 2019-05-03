import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-header',
  templateUrl: './ts-header.component.html',
  styleUrls: ['./ts-header.component.scss']
})
export class TsHeaderComponent implements OnInit {

  @Input() Components: Array<String> = ["createEventBtn"];
  constructor() { }
  ngOnInit() {
  }

}
