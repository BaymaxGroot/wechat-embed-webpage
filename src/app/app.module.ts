import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'ngx-weui/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WeUiModule} from 'ngx-weui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    WeUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
