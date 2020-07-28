import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../shared/interfaces/blog.interface';
import { PagesService } from '../../shared/services/pages.service';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['../../../assets/modal.scss'],
  // styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  arrBlogs: Array<IBlog> = [];

  constructor(private pageService: PagesService, public varService: VariablesService) { }

  ngOnInit(): void {
  }

  closeEditPost(): void{
    this.varService.visEditPost = false;
  }
  saveEditPost(): void{
    this.pageService.editBlog(this.varService.indexEditPost, this.varService.titleEditPost, this.varService.textEditPost);
    this.varService.visEditPost = false;
  }

}
