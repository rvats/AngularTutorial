import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twi-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  dataList: object[];
  @Output() deleteArticleEvent = new EventEmitter();
  @Output() updateArticleEvent = new EventEmitter();

  faTimesCircle = faTimesCircle;

  constructor() {}

  deleteRecord(record: object) {
    this.deleteArticleEvent.emit(record);
  }

  updateRecord(record: object, labelName: string, newValue: string) {
    this.updateArticleEvent.emit({
      record: record,
      labelName: labelName,
      newValue: newValue,
    });
  }
}
