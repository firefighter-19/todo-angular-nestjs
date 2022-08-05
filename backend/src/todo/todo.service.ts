import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../category/entity/category.entity';
import { addTodoDto, DeleteTodoDto } from './dto/todo.dto';
import { TodoEntity } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  public async addTodo(data: addTodoDto): Promise<CategoryEntity> {
    const { categoryId, text } = data;
    const category = await this.categoryRepository.findOneOrFail({
      where: { id: categoryId },
      relations: ['todo'],
    });
    const addedTodo = await this.todoRepository.save({ category, text });
    category.todo = [...category.todo, addedTodo];
    return category;
  }

  public async deleteTodo(data: DeleteTodoDto): Promise<string[]> {
    const { todoId } = data;
    await this.todoRepository.delete(todoId);
    return todoId;
  }
}
