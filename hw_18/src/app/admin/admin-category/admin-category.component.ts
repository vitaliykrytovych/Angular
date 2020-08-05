import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { ICategory } from '../../shared/interfaces/category.interface';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {
  searchCategory = ''; // для пошуку - введений текст - поле input
  arrCategory: Array<ICategory> = [];
  modalVisual = false;
  modalDelete = false;
  deleteID: any = '';
  nameEN = '';
  nameUA = '';
  sortNam: any = true; // видимість стрілок id
  sortEN: any = ''; // видимість стрілок nameEN
  sortUA: any = ''; // видимість стрілок nameUA
  clickElem = 'id'; // для сортування - клікнутий th
  sortCategory: any = true; // для сортування по зростанню, чи навпаки

  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.adminJSONCategories();
  }
  private adminJSONCategories(): void {
    this.catService.getJSONCategory().subscribe(data => {
      this.arrCategory = data;
    });
  }

  add(): void {
    this.modalVisual = true;
  }
  close(): void {
    this.modalVisual = false;
  }
  addCategory(): void {
    if (this.nameEN && this.nameUA) {
      const newC = new Category(this.nameEN, this.nameUA);
      this.catService.postJSONCategory(newC).subscribe(
        () => {
          this.adminJSONCategories();
        }
      );
      this.resetForm();
    }
  }
  deleteCategory(): void {
    this.catService.deleteJSONCategory(this.deleteID).subscribe(
      () => {
        this.adminJSONCategories();
      }
    );
    this.deleteID = '';
    this.modalDelete = false;
  }
  resetForm(): void {
    this.nameEN = '';
    this.nameUA = '';
    this.modalVisual = false;
  }
  dismiss(): void {
    this.modalDelete = false;
    this.deleteID = '';
  }
  delet(id): void {
    this.deleteID = id;
    this.modalDelete = true;
  }
  sortFunc(clickTh): void {
    if (this.clickElem !== clickTh) { // перший клік по елементу
      this.sortCategory = true;
    }
    if (this.clickElem === clickTh) { // повторний клік по тому ж елементу
      if (!this.sortCategory) {
        this.sortCategory = true;
      } else {
        this.sortCategory = false;
      }
    }
    this.clickElem = clickTh;
    this.arrowsVis(clickTh); // робота стрілок
  }
  arrowsVis(elem): void {
    switch (elem) {
      case 'nameEN':
        if (!this.sortEN) {
          this.sortEN = true;
        } else {
          this.sortEN = false;
        }
        this.sortNam = '';
        this.sortUA = '';
        break;
      case 'nameUA':
        if (!this.sortUA) {
          this.sortUA = true;
        } else {
          this.sortUA = false;
        }
        this.sortEN = '';
        this.sortNam = '';
        break;
      case 'id':
        if (!this.sortNam) {
          this.sortNam = true;
        } else {
          this.sortNam = false;
        }
        this.sortEN = '';
        this.sortUA = '';
        break;
    }
  }
}
