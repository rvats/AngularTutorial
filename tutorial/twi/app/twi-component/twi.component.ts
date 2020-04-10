import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
}
