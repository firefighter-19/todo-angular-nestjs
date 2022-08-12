import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarModule } from './pages/top-bar/top-bar.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListModule } from './pages/category-list/category-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './components/materialui/materialui.module';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store/reducers/category.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    TopBarModule,
    CategoryListModule,
    ReactiveFormsModule,
    MaterialUiModule,
    StoreModule.forRoot({projects: categoryReducer}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
