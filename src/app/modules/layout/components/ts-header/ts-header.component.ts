import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '../../../../shared/services/time.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'ts-header',
  templateUrl: './ts-header.component.html',
  styleUrls: ['./ts-header.component.scss']
})
export class TsHeaderComponent implements OnInit {

  @Input() Components: Array<String> = ["createEventBtn"];
  @Input() source: string = "marketplace";
  @Input() algoliaIndexName: string = "tsTesting";
  constructor(public datepipe: DatePipe) {
  }

  ngOnInit() {
  }

}
// TODO solve lint errors and remove unused imports