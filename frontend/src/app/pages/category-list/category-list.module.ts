import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CommonModule, CategoryModule],
  exports: [CategoryListComponent],
})
export class CategoryListModule {}
