import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarModule } from './components/top-bar/top-bar.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoListModule } from './pages/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopBarModule,
    GraphQLModule,
    HttpClientModule,
    TodoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
