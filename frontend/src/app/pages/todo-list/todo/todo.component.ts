import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICategory } from '../../../interfaces';
import { UpdateCategoryDto } from '../dto/category.dto';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() categories!: ICategory[];

  constructor(private readonly todoListService: TodoListService) {}

  public toggleTodo(data: UpdateCategoryDto) {
    // const updatedCategories = this.categories.reduce((acc, cur) =>
    // {
    //   if (data.categories.)
    // }, { categories: []})
    // this.todoListService.updateCategory()
  }
}
