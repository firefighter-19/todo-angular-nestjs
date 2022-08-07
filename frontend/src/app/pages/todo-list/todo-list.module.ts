import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
