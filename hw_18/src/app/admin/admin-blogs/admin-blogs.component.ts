import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { IBlog } from '../../shared/interfaces/blog.interface';
import { Blog } from '../../shared/models/blog.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {
  title = '';
  text = '';
  autor = '';
  nameBut = 'Add';
  editObj: any = ''; // для ідентифікації - чи вноситься новий юзер, чи відбувається редагування наявного
  arrBlogs: Array<IBlog> = [];

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  private getBlogs(): void {
    this.blogsService.getJSONBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }

  add(): void {
    if (this.title && this.text && this.autor) { // якщо заповнено всі 3 поля
      if (this.editObj !== '') { // якщо відбувається редагування
        this.nameBut = 'Add';
        this.editObj.user = this.autor;
        this.editObj.title = this.title;
        this.editObj.text = this.text;
        this.blogsService.updateJSONBlogs(this.editObj).subscribe(
          () => { this.getBlogs(); }
        );
        this.clea();
      } else { // якщо вноситься новий
        const newPost = new Blog (this.autor, this.title, this.text, new Date());
        this.blogsService.postJSONBlogs(newPost).subscribe(
          () => { this.getBlogs(); }
        );
        this.clea();
      }
    }
  }
  deleteUser(hostIndex): void {
    this.blogsService.deleteJSONBlogs(hostIndex).subscribe(
      () => { this.getBlogs(); }
    );
    this.clea(); // якщо нажато в режимі редагування
  }
  editUser(index, hostIndex): void {
    this.editObj = hostIndex;
    this.nameBut = 'Save edit';
    this.title = this.arrBlogs[index].title;
    this.text = this.arrBlogs[index].text;
    this.autor = this.arrBlogs[index].user;
  }
  clea(): void { // обнулення
    this.title = '';
    this.text = '';
    this.autor = '';
    this.editObj = '';
  }
}
