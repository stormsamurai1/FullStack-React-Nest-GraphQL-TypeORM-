import User from './user.entity'

import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity({ name: 'messages' })
export default class Message {
    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ name: 'user_id' })
    userId: number

    @Field()
    @Column({name: 'created_at'})
    createdAt: Date

    @Field()
    @Column({name: 'updated_at'})
    updatedAt: Date

    @Field(() => User)
    user: User


    //Associações

    @ManyToOne(
        () => User,
        user => user.messageConnection,
        {primary: true}
    )
    @JoinColumn({ name: 'user_id' })
    userConnection: Promise<User>
}