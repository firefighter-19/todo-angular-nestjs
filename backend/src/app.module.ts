import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common/decorators/modules';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoryModule } from './category/category.module';
import { TodoModule } from './category/todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      context: ({ req, res }) => ({ req, res }),
      cors: {
        origin: ['http://localhost:8080'],
        credentials: true,
      },
      csrfPrevention: true,
    }),
    ConfigModule.forRoot({
      envFilePath: `./${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
    TodoModule,
  ],
})
export class AppModule {}
