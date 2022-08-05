import { Module } from '@nestjs/common/decorators/modules';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmConfigService } from '../configs/orm.config';
import { graphqlConfig } from '../configs/graphql.config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `./${process.env.NODE_ENV}.env`,
        }),
      ],
      useClass: TypeOrmConfigService,
    }),
    CategoryModule,
    TodoModule,
  ],
})
export class AppModule {}
