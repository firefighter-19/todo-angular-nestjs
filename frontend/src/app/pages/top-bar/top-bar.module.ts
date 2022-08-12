import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../../components/materialui/materialui.module';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
