import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TwiComponent } from './twi.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    TwiComponent,
    AddComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TwiComponent]
})
export class TwiModule { }
