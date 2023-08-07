import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-card-skeleton',
  templateUrl: './ts-card-skeleton.component.html',
  styleUrls: ['./ts-card-skeleton.component.scss']
})
export class TsCardSkeletonComponent implements OnInit {

  @Input() gridType = 'list';
  constructor() { }

  ngOnInit() {
  }

}
