import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { TodoModule } from '../category/category.module';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CommonModule, TodoModule],
  exports: [CategoryListComponent],
})
export class CategoryListModule {}
