import { ICategory } from './../../interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CategoryListService } from './category-list.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit, OnDestroy {
  projects$!: Observable<ICategory[]>;
  protected querySubscription!: Subscription;

  constructor(private readonly todoListService: CategoryListService) {}

  ngOnInit(): void {
    this.querySubscription = this.todoListService.getTodoList().subscribe();
    this.projects$ = this.todoListService.projects$;
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
