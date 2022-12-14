import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TodoEntity } from '../../todo/entity/todo.entity';

@ObjectType()
@Entity('category')
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Field()
  @Column()
  public title!: string;

  @OneToMany(() => TodoEntity, (todo) => todo.category, { cascade: true })
  public todo!: TodoEntity[];
}
