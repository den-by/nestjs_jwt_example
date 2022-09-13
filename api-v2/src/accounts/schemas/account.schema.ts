import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes, Schema as MongooseSchema } from 'mongoose';

export type AccountsDocument = Account & Document;

@ObjectType()
@Schema()
export class Account {
  @Field(() => String, { description: "Accounts's id" })
  @Prop({ type: SchemaTypes.String })
  _id: string;

  @Field(() => String, { description: 'type of Accounts' })
  @Prop()
  type: string;

  @Field(() => String, { description: 'category of Accounts' })
  @Prop()
  category: string;

  @Field(() => String, { description: 'name of Accounts' })
  @Prop()
  name: string;

  @Field(() => String, { description: 'description of Accounts' })
  @Prop()
  description: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
