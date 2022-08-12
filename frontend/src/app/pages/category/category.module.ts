import { TodoComponent } from '../todo/todo.component';
import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../../components/materialui/materialui.module';
@NgModule({
  declarations: [CategoryComponent, TodoComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}
