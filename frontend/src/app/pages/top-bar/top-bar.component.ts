import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryListService } from '../category-list/category-list.service';
import { createCategoryDto } from '../category-list/dto/category.dto';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  addTodoForm = this.formBuilder.group({
    title: '',
  });

  constructor(
    private readonly todoListService: CategoryListService,
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

  public createCategory() {
    const data: createCategoryDto = {
      title: this.addTodoForm.value.title as string,
    };
    this.todoListService.createCategory(data);
    this.addTodoForm.reset();
    this.dialog.closeAll();
  }
}
