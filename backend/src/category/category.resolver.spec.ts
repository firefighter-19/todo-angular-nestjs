import { Test, TestingModule } from '@nestjs/testing';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import {
  CategoryDto,
  CreateCategoryDto,
  DeleteCategoryDto,
  DeleteTodoDto,
  UpdateCategoryDto,
} from './dto/category.dto';

describe('CategoryResolver', () => {
  let resolver: CategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryResolver,
        {
          provide: CategoryService,
          useFactory: () => ({
            getTodoList: jest.fn(() => [
              {
                id: '123',
                title: 'First created category',
                todo: [
                  {
                    id: '123',
                    text: 'First created todo',
                    isCompleted: false,
                  },
                ],
              },
            ]),
            createCategory: jest.fn(
              (category: CreateCategoryDto): CategoryDto => ({
                id: '123',
                title: category.title,
                todo: category.text.map((message) => ({
                  id: '123',
                  text: message,
                  isCompleted: false,
                })),
              }),
            ),
            updateCategory: jest.fn(({ categories }: UpdateCategoryDto) =>
              categories.map((category) => ({
                id: category.id,
                title: category.title,
                todo: category.todo?.map((todo) => ({
                  id: todo.id,
                  text: todo.text,
                  isCompleted: todo.isCompleted,
                })),
              })),
            ),
            deleteCategory: jest.fn(({ id }: DeleteCategoryDto) => id),
            deleteTodo: jest.fn(({ todoId }: DeleteTodoDto) => todoId),
          }),
        },
      ],
    }).compile();

    resolver = module.get<CategoryResolver>(CategoryResolver);
  });

  it('resolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('Get todo list', () => {
    it('should return todo array', async () => {
      expect(await resolver.getTodoList()).toEqual([
        {
          id: '123',
          title: 'First created category',
          todo: [
            {
              id: '123',
              text: 'First created todo',
              isCompleted: false,
            },
          ],
        },
      ]);
    });
  });

  describe('Creating a category and todo list', () => {
    it('should create category and todo', async () => {
      expect(
        await resolver.createCategory({
          title: 'Category title',
          text: ['Todo text'],
        }),
      ).toEqual({
        id: '123',
        title: 'Category title',
        todo: ['Todo text'].map((message) => ({
          id: '123',
          text: message,
          isCompleted: false,
        })),
      });
    });
  });

  describe('Updating a category and todo list', () => {
    it('should update category or/and todo', async () => {
      expect(
        await resolver.updateCategory({
          categories: [
            {
              id: '123',
              title: 'First updated category',
              todo: [
                {
                  id: '123',
                  text: 'First updated todo',
                  isCompleted: true,
                },
              ],
            },
          ],
        }),
      ).toEqual([
        {
          id: '123',
          title: 'First updated category',
          todo: [
            {
              id: '123',
              text: 'First updated todo',
              isCompleted: true,
            },
          ],
        },
      ]);
    });
  });

  describe('Delete category', () => {
    it('should delete the categories array by id', async () => {
      expect(await resolver.deleteCategory({ id: ['123'] })).toEqual(['123']);
    });
  });

  describe('Delete todo or todo list', () => {
    it('should delete the todo array by id', async () => {
      expect(await resolver.deleteCategory({ id: ['123'] })).toEqual(['123']);
    });
  });
});
