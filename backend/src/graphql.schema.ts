
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    title: string;
    text?: Nullable<Nullable<string>[]>;
}

export class UpdateCategoryInput {
    categories: CategoryInput[];
}

export class CategoryInput {
    id: string;
    title?: Nullable<string>;
    todo?: Nullable<Nullable<TodoInput>[]>;
}

export class DeleteCategoryInput {
    id: string[];
}

export class AddTodoInput {
    categoryId: string;
    text: string;
}

export class DeleteTodoInput {
    todoId: string[];
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

    abstract updateCategory(todoData: UpdateCategoryInput): Nullable<Category>[] | Promise<Nullable<Category>[]>;

    abstract deleteCategory(todoData: DeleteCategoryInput): Nullable<string>[] | Promise<Nullable<string>[]>;

    abstract addTodo(todoData: AddTodoInput): Category | Promise<Category>;

    abstract deleteTodo(todoData: DeleteTodoInput): Nullable<string>[] | Promise<Nullable<string>[]>;
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
