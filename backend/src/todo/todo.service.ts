import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { CategoryEntity } from '../category/entity/category.entity';
import { addTodoDto, DeleteTodoDto, updateTodoDto } from './dto/todo.dto';
import { TodoEntity } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  public async addTodo(data: addTodoDto): Promise<CategoryEntity> {
    const { categoryId, text } = data;
    const category = await this.categoryService.getOneCategory(categoryId);
    const addedTodo = await this.todoRepository.save({ category, text });
    category.todo = [...category.todo, addedTodo];
    return category;
  }

  public async updateTodo(data: updateTodoDto): Promise<CategoryEntity> {
    const { categoryId, todo } = data;
    await this.todoRepository.update({ id: todo.id }, { ...todo });
    return await this.categoryService.getOneCategory(categoryId);
  }

  public async deleteTodo(data: DeleteTodoDto): Promise<CategoryEntity> {
    const { todoId, categoryId } = data;
    const category = await this.categoryService.getOneCategory(categoryId);
    if (category) await this.todoRepository.delete(todoId);
    return category;
  }
}
