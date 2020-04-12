import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { without, findIndex } from 'lodash';

@Component({
  selector: 'twi-root',
  templateUrl: './twi.component.html',
})
export class TwiComponent implements OnInit {
  dataList: object[];
  modifiedDataList: object[];
  orderBy: string;
  orderType: string;
  lastIndex: number;

  constructor(private httpClient: HttpClient) {
    this.orderBy = 'articleName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.lastIndex = 1;
    this.httpClient.get<object[]>('../assets/data.json').subscribe((data) => {
      this.dataList = data.map((article: any) => {
        article.Id = this.lastIndex++;
        return article;
      });
      this.modifiedDataList = data;
      this.sortArticles();
    });
  }

  addArticle(article: any) {
    article.Id = this.lastIndex;
    this.dataList.unshift(article);
    this.modifiedDataList.unshift(article);
    this.lastIndex++;
    this.sortArticles();
  }

  deleteArticle(article: object) {
    this.dataList = without(this.dataList, article);
    this.modifiedDataList = without(this.dataList, article);
    this.sortArticles();
  }

  updateArticle(modifiedArticle: any) {
    let articleIndex: number;
    let modifiedArticleIndex: number;

    articleIndex = findIndex(this.dataList, {
      articleId: modifiedArticle.article.Id,
    });
    modifiedArticleIndex = findIndex(this.modifiedDataList, {
      articleId: modifiedArticle.article.Id,
    });

    this.dataList[articleIndex][modifiedArticle.labelName] =
      modifiedArticle.newValue;
    this.dataList[modifiedArticleIndex][modifiedArticle.labelName] =
      modifiedArticle.newValue;
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

  orderArticles(orderObject) {
    this.orderBy = orderObject.orderBy;
    this.orderType = orderObject.orderType;
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
