import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TwiComponent } from './twi.component';

@NgModule({
  declarations: [
    TwiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TwiComponent]
})
export class TwiModule { }
