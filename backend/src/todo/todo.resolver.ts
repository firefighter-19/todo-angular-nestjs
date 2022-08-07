import { TodoService } from './todo.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DeleteTodoDto, addTodoDto, updateTodoDto } from './dto/todo.dto';
import { CategoryEntity } from '../category/entity/category.entity';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => CategoryEntity)
  async addTodo(
    @Args('todoData') todoData: addTodoDto,
  ): Promise<CategoryEntity> {
    return await this.todoService.addTodo(todoData);
  }

  @Mutation(() => CategoryEntity)
  async updateTodo(
    @Args('todoData') todoData: updateTodoDto,
  ): Promise<CategoryEntity> {
    return await this.todoService.updateTodo(todoData);
  }

  @Mutation(() => CategoryEntity)
  async deleteTodo(
    @Args('todoData') todoData: DeleteTodoDto,
  ): Promise<CategoryEntity> {
    return await this.todoService.deleteTodo(todoData);
  }
}
