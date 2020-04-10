import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'twi-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  @Input()
  dataList: object[];
  constructor() {}

  ngOnInit(): void {}
}
