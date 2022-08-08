import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjects } from '../../interfaces';
import { CategoryListService } from './category-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  projects$?: Observable<IProjects>;
  constructor(private readonly todoListService: CategoryListService) {}

  ngOnInit(): void {
    this.projects$ = this.todoListService.getTodoList();
  }
}
