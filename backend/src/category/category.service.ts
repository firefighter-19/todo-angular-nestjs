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

  public async getOneCategory(id: string): Promise<CategoryEntity> {
    return await this.categoryRepository.findOneOrFail({
      where: { id },
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
  ): Promise<CategoryEntity> {
    const { categoryId, title } = data;
    await this.categoryRepository.update({ id: categoryId }, { title });
    return await this.getOneCategory(categoryId);
  }

  public async deleteCategory(
    data: DeleteCategoryDto,
  ): Promise<CategoryEntity> {
    const { id } = data;
    const category = await this.getOneCategory(id);
    if (category) await this.categoryRepository.delete(id);
    return category;
  }
}
