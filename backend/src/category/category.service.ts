import { CategoryEntity } from './entity/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  DeleteCategoryDto,
} from './dto/category.dto';
import { TodoEntity } from '../todo/entity/todo.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  public async getTodoList(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      relations: ['todo'],
    });
  }

  public async createCategory(
    data: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    const { title, text } = data;
    const category = await this.categoryRepository.save({ title });
    const todoList = [];
    for (const todoText of text) {
      const todo = await this.todoRepository.save({
        text: todoText,
        category,
      });
      todoList.push(todo);
    }
    category.todo = todoList;
    return category;
  }

  public async updateCategory(
    data: UpdateCategoryDto,
  ): Promise<CategoryEntity[]> {
    const { categories } = data;
    for (const category of categories) {
      const { todo: todoList } = category;
      await this.categoryRepository.update(
        { id: category.id },
        { title: category.title },
      );
      if (todoList && todoList.length) {
        for (const todo of todoList) {
          await this.todoRepository.update(
            {
              id: todo.id,
            },
            {
              text: todo.text,
              isCompleted: todo.isCompleted,
            },
          );
        }
      }
    }
    return await this.getTodoList();
  }

  public async deleteCategory(data: DeleteCategoryDto): Promise<string[]> {
    const { id } = data;
    await this.categoryRepository.delete(id);
    return id;
  }
}
