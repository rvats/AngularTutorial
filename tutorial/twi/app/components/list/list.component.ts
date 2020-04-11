import { Component, OnInit, Input } from '@angular/core';
import {faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twi-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  @Input()
  dataList: object[];

  faTimesCircle = faTimesCircle;

  constructor() {}

  ngOnInit(): void {}
}
