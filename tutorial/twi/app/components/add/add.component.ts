import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'twi-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  hideForm: boolean;
  faPlusCircle = faPlusCircle;

  @Output() addArticleEvent = new EventEmitter();

  constructor() {
    this.hideForm = true;
  }

  addArticle(articleForm: any){
    const articleObject: object = {
      articleName: articleForm.articleName,
      articleUrl: articleForm.articleUrl,
      articleDate: articleForm.articleDate,
      articleAuthor: articleForm.articleAuthor
    };
    this.addArticleEvent.emit(articleObject);
    this.hideForm = !this.hideForm;
  }

  ngOnInit(): void {}

  toggleArticleFormDisplay() {
    this.hideForm = !this.hideForm;
  }
}
