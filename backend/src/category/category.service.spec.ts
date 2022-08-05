import { TodoEntity } from '../todo/entity/todo.entity';
import { CategoryEntity } from './entity/category.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { Repository } from 'typeorm';
import {
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';

type MockType<T> = {
  [P in keyof T]?: jest.Mock<Record<string, any>>;
};

describe('CategoryService', () => {
  let service: CategoryService;

  const categoryRepositoryMock: MockType<Repository<CategoryEntity>> = {
    find: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: categoryRepositoryMock,
        },
        {
          provide: getRepositoryToken(TodoEntity),
          useValue: categoryRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const categoryTodoDto: CreateCategoryDto = {
        title: 'First created category',
        text: ['First created todo'],
      };
      const createdCategoryMock: CategoryDto = {
        id: '123',
        title: 'First created category',
        todo: [
          {
            id: '123',
            text: 'First created todo',
            isCompleted: false,
          },
        ],
      };
      categoryRepositoryMock.save?.mockReturnValue(createdCategoryMock);
      const newCategory = await service.createCategory(categoryTodoDto);
      expect(newCategory).toMatchObject(createdCategoryMock);
    });
  });

  describe('update', () => {
    it('should update the list of categories', async () => {
      const updatedCategoryValue: CategoryDto[] = [
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
        {
          id: '321',
          title: 'Second updated category',
          todo: [
            {
              id: '321',
              text: 'Seconds updated todo',
              isCompleted: true,
            },
          ],
        },
      ];
      const categoryMock: UpdateCategoryDto = {
        categories: [
          {
            id: '123',
            title: 'First update category',
            todo: [
              {
                id: '123',
                text: 'First update todo',
                isCompleted: true,
              },
            ],
          },
          {
            id: '321',
            title: 'Second update category',
            todo: [
              {
                id: '321',
                text: 'Seconds update todo',
                isCompleted: true,
              },
            ],
          },
        ],
      };
      categoryRepositoryMock.update?.mockReturnValue(updatedCategoryValue);
      const updatedCategory = await service.updateCategory(categoryMock);
      console.log('updatedCategory ===========>: ', updatedCategory);
      expect(updatedCategory).toMatchObject(updatedCategoryValue);
    });
  });

  // describe('get todo list', () => {
  //   it('should return categories with todo', async () => {
  //     const categoryMock: CategoryDto[] = [
  //       {
  //         id: '123333',
  //         title: 'First created category',
  //         todo: [
  //           {
  //             id: '123',
  //             text: 'First created todo',
  //             isCompleted: false,
  //           },
  //         ],
  //       },
  //       {
  //         id: '321333333',
  //         title: 'Second created category',
  //         todo: [
  //           {
  //             id: '321',
  //             text: 'Seconds created todo',
  //             isCompleted: false,
  //           },
  //         ],
  //       },
  //     ];
  //     categoryRepositoryMock.find?.mockReturnValue(categoryMock);
  //     const newCategory = await service.getTodoList();
  //     expect(newCategory).toContainEqual({
  //       id: '123333',
  //       title: 'First created category',
  //       todo: [
  //         {
  //           id: '123',
  //           text: 'First created todo',
  //           isCompleted: false,
  //         },
  //       ],
  //     });
  //     expect(categoryRepositoryMock.find).toHaveBeenCalled();
  //   });
  // });
});
