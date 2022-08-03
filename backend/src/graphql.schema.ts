
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    title: string;
    text: string;
}

export abstract class IQuery {
    abstract projects(): Nullable<Category>[] | Promise<Nullable<Category>[]>;
}

export abstract class IMutation {
    abstract createTodo(todoData: CreateUserInput): Category | Promise<Category>;
}

export class Category {
    id: string;
    title: string;
    todo: Nullable<Todo>[];
}

export class Todo {
    id: string;
    text: string;
    isCompleted: boolean;
}

type Nullable<T> = T | null;
