import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../shared/interfaces/blog.interface';
import { PagesService } from '../../shared/services/pages.service';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['../../../assets/modal.scss'],
  // styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  title = '';
  text = '';

  constructor(
    private pageService: PagesService,
    public varService: VariablesService
  ) {}

  ngOnInit(): void {}

  closeAddPost(): void {
    this.title = '';
    this.text = '';
    this.varService.visAddPost = false;
  }
  postAddPost(): void {
    if (this.title && this.text) {
      this.pageService.addBlogs({
        id: 'no server',
        postedBy: this.varService.nameEnterUser,
        topic: this.title,
        date: new Date(),
        message: this.text,
      });
      this.title = '';
      this.text = '';
      this.varService.visAddPost = false;
    }
  }
}
