import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { addTodoDto } from './dto/todo.dto';
import { MatDialog } from '@angular/material/dialog';

import { ITodo } from '../../interfaces';
import { TodoService } from '../todo/todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input() categoryId!: string;
  @Input() todo!: ITodo[];

  addTodoForm = this.formBuilder.group({
    id: '',
    text: '',
    isCompleted: false,
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

  public addTodo() {
    const data: addTodoDto = {
      categoryId: this.categoryId,
      text: this.addTodoForm.value.text as string,
    };
    this.todoService.addTodo(data);
    this.addTodoForm.reset();
    this.dialog.closeAll();
  }
}
