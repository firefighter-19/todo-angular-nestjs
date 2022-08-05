import { TodoEntity } from './entity/todo.entity';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoryEntity } from '../category/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, TodoEntity])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
