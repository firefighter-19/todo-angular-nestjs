import { Module } from '@nestjs/common/decorators/modules';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoryModule } from './category/category.module';
import { typeOrmConfig } from '../configs/orm.config';
import { graphqlConfig } from '../configs/graphql.config';

@Module({
  imports: [
    GraphQLModule.forRoot(graphqlConfig),
    ConfigModule.forRoot({
      envFilePath: `./${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    CategoryModule,
  ],
})
export class AppModule {}
