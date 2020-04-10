import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TwiComponent } from './twi-component/twi.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [TwiComponent, AddComponent, ListComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [TwiComponent],
})
export class TwiModule {}
