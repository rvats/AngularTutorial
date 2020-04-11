import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {without} from 'lodash';

@Component({
  selector: 'twi-root',
  templateUrl: './twi.component.html',
})
export class TwiComponent implements OnInit {
  title = 'Rahul Vats Anular Tutorial';
  dataList: object[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<object[]>('../assets/data.json').subscribe((data) => {
      this.dataList = data;
    });
  }

  deleteArticle(article: object){
    this.dataList = without(this.dataList, article);
  }
}
