import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Schema as MongooseSchema } from 'mongoose';

export type EntriesDocument = Entry & Document;

@ObjectType()
@Schema()
export class Entry {
  @Field(() => String, { description: "Entries's id" })
  @Prop({ type: SchemaTypes.String, unique: true })
  _id: string;

  @Field(() => String, { description: 'type of Entries' })
  @Prop()
  type: string;

  @Field(() => String, { description: 'category of Entries' })
  @Prop()
  reference: string;

  @Field(() => String, { description: 'name of Entries' })
  @Prop()
  companyId: string;

  @Field(() => String, { description: 'description of Entries' })
  @Prop()
  description: string;

  @Field(() => String, { description: 'description of Entries' })
  @Prop()
  debitTotal: number;

  @Field(() => String, { description: 'description of Entries' })
  @Prop()
  creditTotal: number;

  @Field(() => String, { description: 'description of Entries' })
  @Prop()
  Total: number;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
