import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TwiComponent } from './twi-component/twi.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [TwiComponent, AddComponent, ListComponent, SearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [TwiComponent],
})
export class TwiModule {}
