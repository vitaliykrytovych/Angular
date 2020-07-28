import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw14Component } from './hw14/hw14.component';
import { SearchPipe } from './hw14/search.pipe';
import { SortPipe } from './hw14/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Hw14Component,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
