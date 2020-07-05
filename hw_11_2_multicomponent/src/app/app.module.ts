import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { PBadWordsComponent } from './p-bad-words/p-bad-words.component';
import { DivInputComponent } from './div-input/div-input.component';
import { AddComponent } from './add/add.component';
import { ResetComponent } from './reset/reset.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CenzorComponent } from './cenzor/cenzor.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PBadWordsComponent,
    DivInputComponent,
    AddComponent,
    ResetComponent,
    TextareaComponent,
    CenzorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
