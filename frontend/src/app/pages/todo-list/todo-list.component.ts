import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjects } from '../../interfaces';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  projects$?: Observable<IProjects>;
  constructor(private readonly todoListService: TodoListService) {}

  ngOnInit(): void {
    this.projects$ = this.todoListService.getTodoList();
  }
}
