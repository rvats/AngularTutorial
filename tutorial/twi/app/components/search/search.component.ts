import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'twi-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  query: string;
  @Input() orderBy: string;
  @Input() orderType: string;
  @Output() queryArticlesEvent = new EventEmitter();
  @Output() orderArticlesEvent = new EventEmitter();

  handleQuery(){
    this.queryArticlesEvent.emit(this.query);
  }

  handleSort(orderItems){
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderArticlesEvent.emit(orderItems);
  }

  constructor() {}

  ngOnInit(): void {}
}
