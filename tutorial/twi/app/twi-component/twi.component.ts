import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { without } from 'lodash';

@Component({
  selector: 'twi-root',
  templateUrl: './twi.component.html',
})
export class TwiComponent implements OnInit {
  dataList: object[];
  modifiedDataList: object[];
  orderBy: string;
  orderType: string;

  constructor(private httpClient: HttpClient) {
    this.orderBy = 'articleName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.httpClient.get<object[]>('../assets/data.json').subscribe((data) => {
      this.dataList = data;
      this.modifiedDataList = data;
      this.sortArticles();
    });
  }

  addArticle(article: object) {
    this.dataList.unshift(article);
    this.modifiedDataList.unshift(article);
  }

  deleteArticle(article: object) {
    this.dataList = without(this.dataList, article);
    this.modifiedDataList = without(this.dataList, article);
  }

  queryArticles(query: string) {
    this.modifiedDataList = this.dataList.filter((eachItem) => {
      return (
        eachItem['articleName'].toLowerCase().includes(query.toLowerCase()) ||
        eachItem['articleUrl'].toLowerCase().includes(query.toLowerCase()) ||
        eachItem['articleAuthor'].toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  sortArticles() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    this.modifiedDataList.sort((a, b) => {
      if (a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()) {
        return -1 * order;
      }
      if (a[this.orderBy].toLowerCase() === b[this.orderBy].toLowerCase()) {
        return 0;
      }
      if (a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()) {
        return 1 * order;
      }
    });
  }
}
