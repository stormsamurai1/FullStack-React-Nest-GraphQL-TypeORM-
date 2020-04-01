import Message from './message.entity'

import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export default class User{
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    email: string;

    @Field()
    //No banco o campo não está em CamelCase, o parametro passado corrige isso
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    //Associações
    @OneToMany(
        () => Message,
        message => message.userConnection,
    )

    messageConnection: Promise<Message[]>

}