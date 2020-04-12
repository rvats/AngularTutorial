import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'twi-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  query: string;
  @Output() queryArticlesEvent = new EventEmitter();

  handleQuery(){
    this.queryArticlesEvent.emit(this.query);
  }

  constructor() {}

  ngOnInit(): void {}
}
