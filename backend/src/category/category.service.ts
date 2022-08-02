import { CategoryEntity } from './entities/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryTodoDto } from './dto/category.dto';
import { TodoEntity } from './entities/todo.entity';

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

  public async createTodo(todoData: CategoryTodoDto): Promise<CategoryEntity> {
    const { title, text } = todoData;
    const savedTitle = await this.categoryRepository.save({ title });
    const savedTodo = await this.todoRepository.save({
      text,
      category: savedTitle,
    });
    savedTitle.todo = [savedTodo];
    return savedTitle;
  }
}
