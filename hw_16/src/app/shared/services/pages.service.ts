import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { IBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  activEdit = false; // активність режиму редагування
  visAddPost = true; // видимість блоку AddPost

  private users: Array<IUser> = [
    {
      id: 'no server',
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
    },
  ];
  private blogs: Array<IBlog> = [
    {
      id: 'no server',
      postedBy: 'admin',
      topic: 'First post',
      date: new Date(1594946000000),
      message: 'Sign up to create your account and start to use Angular Blog'
    }
  ];
  constructor() {}

  getUsers(): Array<IUser> {
    return this.users;
  }
  addUsers(user: IUser): void {
    this.users.push(user);
  }
  enterUsers(email: string, password: string): number { // перевірка при вході
    if (this.users.some(elem => elem.email === email) && this.users.some(elem => elem.password === password)) {
      return this.users.findIndex(elem => elem.email === email); // повертає індекс юзера
    }
  }
  auditRegistration(username: string, email: string): boolean { // перевірка при реєстрації
    if (this.users.some(elem => elem.username === username) || this.users.some(elem => elem.email === email)) {
      return false; // якщо вже є username або email
    }
    return true;
  }

  getBlogs(): Array<IBlog> {
    return this.blogs;
  }
  addBlogs(blog: IBlog): void {
    this.blogs.push(blog);
  }
  delBlogs(index: number): void {
    this.blogs.splice(index, 1);
  }
  editBlog(index: number, title: string, text: string): void {
    this.blogs[index].topic = title;
    this.blogs[index].message = text;
  }
}
