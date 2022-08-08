import { Component, Input, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ITodo } from '../../interfaces';
import { updateTodoDto, deleteTodoDto } from '../category/dto/todo.dto';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() categoryId!: string;
  @Input() todo!: ITodo;

  addTodoForm = this.formBuilder.group({
    text: '',
  });

  constructor(
    private readonly todoService: TodoService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  public openDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: '35rem',
      height: '12.7rem',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '300ms',
    });
  }

  public updateTodo(isCompleted?: boolean) {
    const data: updateTodoDto = {
      categoryId: this.categoryId,
      todo: {
        id: this.todo.id as string,
        text: this.addTodoForm.value.text?.length
          ? this.addTodoForm.value.text
          : (this.todo.text as string),
        isCompleted:
          typeof isCompleted === 'boolean'
            ? isCompleted
            : (this.todo.isCompleted as boolean),
      },
    };
    this.todoService.updateTodo(data);
    this.dialog.closeAll();
  }

  public deleteTodo(data: deleteTodoDto) {
    this.todoService.removeTodo(data);
  }
}
