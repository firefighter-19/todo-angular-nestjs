
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    title: string;
}

export class UpdateCategoryInput {
    categoryId: string;
    title: string;
}

export class CategoryInput {
    id: string;
    title?: Nullable<string>;
    todo?: Nullable<Nullable<TodoInput>[]>;
}

export class DeleteCategoryInput {
    id: string;
}

export class AddTodoInput {
    categoryId: string;
    text: string;
}

export class UpdateTodoInput {
    categoryId: string;
    todo: TodoInput;
}

export class DeleteTodoInput {
    categoryId: string;
    todoId: string;
}

export class TodoInput {
    id: string;
    text: string;
    isCompleted: boolean;
}

export abstract class IQuery {
    abstract projects(): Nullable<Category>[] | Promise<Nullable<Category>[]>;
}

export abstract class IMutation {
    abstract createCategory(todoData: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(todoData: UpdateCategoryInput): Category | Promise<Category>;

    abstract deleteCategory(todoData: DeleteCategoryInput): Category | Promise<Category>;

    abstract addTodo(todoData: AddTodoInput): Category | Promise<Category>;

    abstract updateTodo(todoData: UpdateTodoInput): Category | Promise<Category>;

    abstract deleteTodo(todoData: DeleteTodoInput): Category | Promise<Category>;
}

export class Category {
    id?: Nullable<string>;
    title?: Nullable<string>;
    todo?: Nullable<Nullable<Todo>[]>;
}

export class Todo {
    id?: Nullable<string>;
    text?: Nullable<string>;
    isCompleted?: Nullable<boolean>;
}

type Nullable<T> = T | null;
