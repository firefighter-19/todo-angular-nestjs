import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, MatCheckboxModule],
  exports: [TodoComponent],
})
export class TodoModule {}
