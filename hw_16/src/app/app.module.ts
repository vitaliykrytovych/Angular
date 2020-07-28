import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SignInComponent,
    AddPostComponent,
    SignUpComponent,
    EditPostComponent
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
