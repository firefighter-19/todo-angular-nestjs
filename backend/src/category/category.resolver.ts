import { CategoryEntity } from './entities/category.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryTodoDto } from './dto/category.dto';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => CategoryEntity)
  async getTodoList(): Promise<CategoryEntity[]> {
    return await this.categoryService.getTodoList();
  }

  @Mutation(() => CategoryEntity)
  async createTodo(
    @Args('todoData') todoData: CategoryTodoDto,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createTodo(todoData);
  }
}
