import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;

  cityPopupActive: boolean = false;
  constructor(public datepipe: DatePipe) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log("clickout called");
    if (!this.citySuggestions.nativeElement.contains(event.target)) {
      this.cityPopupActive = false;
    }
  }

  ngOnInit() {
  }

}
