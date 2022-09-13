import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Schema as MongooseSchema } from 'mongoose';
import { ObjectID } from 'bson';
import { User } from '@/users/schemas/user.schema';
import { Transaction } from '@/transactions/schemas/transaction.schema';

export type ContactDocument = Contact & Document;

@ObjectType()
@Schema()
export class Contact {
  @Field(() => String, { description: "Contact's id" })
  @Prop({ type: SchemaTypes.String, unique: true })
  _id: string;

  @Field(() => String, { description: "Company's id" })
  @Prop()
  companyId: string;

  @Field(() => String, { description: 'Type of Contacts' })
  @Prop()
  type: string;

  @Field(() => String, { description: 'Category of Contacts' })
  @Prop()
  name: string;

  @Field(() => String, { description: 'Created data' })
  @Prop({ type: SchemaTypes.Date })
  createdOn: string;

  @Field(() => String, { description: 'Updated data', nullable: true })
  @Prop({ type: SchemaTypes.Date })
  updatedOn?: string;

  @Field(() => User, { description: 'Get user' })
  @Prop({ type: MongooseSchema.Types.String, ref: 'CompanyId' })
  user: string;

  @Field(() => [Transaction], { description: 'Get transactions' })
  @Prop({ type: MongooseSchema.Types.String, ref: 'TransactionId' })
  transactions: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);

ContactSchema.pre('save', function (next) {
  if (this.isNew) {
    this.set('_id', new ObjectID());
    this.set('createdOn', new Date());
  } else {
    this.set('updatedOn', new Date());
  }
  next();
});

ContactSchema.pre(['findOneAndUpdate'], function () {
  this.set('updatedOn', new Date());
});
