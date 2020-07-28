import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces/user.interface';
import { IBlog } from '../../shared/interfaces/blog.interface';
import { PagesService } from '../../shared/services/pages.service';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  arrBlogs: Array<IBlog> = [];

  constructor(private pageService: PagesService, public varService: VariablesService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  private getBlogs(): void {
    this.arrBlogs = this.pageService.getBlogs();
  }
  clickEdit(index, title, text): void{
    this.varService.indexEditPost = index;
    this.varService.titleEditPost = title;
    this.varService.textEditPost = text;
    this.varService.visEditPost = true;
  }
  clickDel(index): void{
    this.pageService.delBlogs(index);
  }

}
