import { CategoryEntity } from './entities/category.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  DeleteCategoryDto,
  DeleteTodoDto,
} from './dto/category.dto';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryEntity], {
    name: 'projects',
  })
  async getTodoList(): Promise<CategoryEntity[]> {
    return await this.categoryService.getTodoList();
  }

  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('todoData') todoData: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createCategory(todoData);
  }
  @Mutation(() => [CategoryEntity])
  async updateCategory(
    @Args('todoData') todoData: UpdateCategoryDto,
  ): Promise<CategoryEntity[]> {
    return await this.categoryService.updateCategory(todoData);
  }

  @Mutation(() => [String])
  async deleteCategory(
    @Args('todoData') todoData: DeleteCategoryDto,
  ): Promise<string[]> {
    return await this.categoryService.deleteCategory(todoData);
  }

  @Mutation(() => [String])
  async deleteTodo(
    @Args('todoData') todoData: DeleteTodoDto,
  ): Promise<string[]> {
    return await this.categoryService.deleteTodo(todoData);
  }
}
