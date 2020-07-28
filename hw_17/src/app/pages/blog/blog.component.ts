import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';
import { IBlog } from '../../shared/interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
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
}
