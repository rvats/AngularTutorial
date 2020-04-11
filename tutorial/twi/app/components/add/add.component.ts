import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twi-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  showForm: boolean;
  faPlusCircle = faPlusCircle;

  constructor() {
    this.showForm = true;
  }

  ngOnInit(): void {}

  toggleArticleFormDisplay() {
    this.showForm = !this.showForm;
  }
}
