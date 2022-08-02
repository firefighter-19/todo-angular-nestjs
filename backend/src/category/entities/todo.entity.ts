import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';

@ObjectType()
@Entity('todo')
export class TodoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Field()
  @Column()
  public text!: string;

  @Field()
  @Column({ default: false })
  public isCompleted!: boolean;

  @ManyToOne(() => CategoryEntity, (category) => category.todo)
  public category!: CategoryEntity;
}
