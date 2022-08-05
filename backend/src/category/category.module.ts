import { TodoEntity } from '../todo/entity/todo.entity';
import { CategoryEntity } from './entity/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, TodoEntity])],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
