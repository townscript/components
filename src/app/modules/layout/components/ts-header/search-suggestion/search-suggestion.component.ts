import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-suggestion',
  templateUrl: './search-suggestion.component.html',
  styleUrls: ['./search-suggestion.component.scss']
})
export class SearchSuggestionComponent implements OnInit {

  @Input() item;
  @Input() searchText;
  @Output() itemSelected = new EventEmitter<any>();
  isActive: boolean;
  constructor() { }

  ngOnInit() {
    this.isActive = false;
  }

  setActive(val) {
    this.isActive = val;
  }

  selectItem() {
    this.itemSelected.emit(this.item);
  }

}
