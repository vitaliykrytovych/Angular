import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  visSignIn = false; // видимість блоку SignIn
  visSignUp = false; // видимість блоку SignUp
  visAddPost = false; // видимість блоку AddPost
  visEditPost = false; // видимість блоку EditPost
  nameEnterUser = ''; // імя юзера, який залогінився

  indexEditPost: number; // індекс поста, який редагується
  titleEditPost = ''; // заголовок поста, який редагується
  textEditPost = ''; // текст поста, який редагується

  constructor() { }
}
