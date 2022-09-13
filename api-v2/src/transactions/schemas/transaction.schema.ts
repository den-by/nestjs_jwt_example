import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Schema as MongooseSchema } from 'mongoose';
import { Entry } from '@/entries/schemas/entry.schema';
import { Account } from '@/accounts/schemas/account.schema';
import { Contact } from '@/contacts/schemas/contact.schema';
import { ObjectID } from 'bson';

export type TransactionDocument = Transaction & Document;

@ObjectType()
@Schema()
export class Transaction {
  @Field(() => String, { description: "Transaction's id" })
  @Prop({ type: SchemaTypes.String, unique: true })
  _id: string;

  @Field(() => String, { description: "Entry's id" })
  @Prop()
  entryId: string;

  @Field(() => Entry, { description: 'Get entry' })
  @Prop({ type: MongooseSchema.Types.String, ref: 'EntryId' })
  entry: string;

  @Field(() => String, { description: "Account's id" })
  @Prop()
  accountId: string;

  @Field(() => Account, { description: 'Get account' })
  @Prop({ type: MongooseSchema.Types.String, ref: 'AccountId' })
  account: string;

  @Field(() => String, { description: "Task's id", nullable: true })
  @Prop()
  taskId?: string;

  @Field(() => String, { description: "Contact's id", nullable: true })
  @Prop()
  contactId?: string;

  @Field(() => Contact, { description: 'Get contact' })
  @Prop({ type: MongooseSchema.Types.String, ref: 'ContactId' })
  contact: string;

  @Field(() => String, { description: 'Type of Transactions' })
  @Prop()
  type: string;

  @Field(() => Number, { description: 'Amount of Transactions' })
  @Prop()
  amount: number;

  @Field(() => Number, { description: 'Credit of Transactions' })
  @Prop()
  credit: number;

  @Field(() => Number, { description: 'Debit of Transactions' })
  @Prop()
  debit: number;

  @Field(() => String, { description: 'Description of Transactions', nullable: true })
  @Prop()
  description?: string;

  @Field(() => String, { description: 'Reference of Transactions', nullable: true })
  @Prop()
  reference?: string;

  @Field(() => String, { description: 'Date', nullable: true })
  @Prop({ type: SchemaTypes.Date })
  date: string;

  @Field(() => String, { description: 'Created data' })
  @Prop({ type: SchemaTypes.Date })
  createdOn: string;

  @Field(() => String, { description: 'Updated data', nullable: true })
  @Prop({ type: SchemaTypes.Date })
  updatedOn?: string;

  @Field(() => String, { description: 'Deleted data', nullable: true })
  @Prop({ type: SchemaTypes.Date })
  deleteOn?: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

TransactionSchema.pre('save', function (next) {
  if (this.isNew) {
    this.set('_id', new ObjectID());
    this.set('createdOn', new Date());
  } else {
    this.set('updatedOn', new Date());
  }
  next();
});

TransactionSchema.pre(['findOneAndUpdate'], function () {
  this.set('updatedOn', new Date());
});
