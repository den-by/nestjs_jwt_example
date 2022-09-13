import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTransactionInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "Account's id" })
  accountId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "Entry's id" })
  entryId: string;

  @IsString()
  @Field(() => String, { description: "Task's id" })
  taskId?: string;

  @IsString()
  @Field(() => String, { description: "Contact's id" })
  contactId?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Contact  type' })
  type: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number, { description: 'Amount' })
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number, { description: 'Debit' })
  debit: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number, { description: 'Credit' })
  credit: number;

  @IsString()
  @Field(() => String, { description: "Transaction's description" })
  description?: string;

  @IsString()
  @Field(() => String, { description: "Transaction's reference" })
  reference?: string;
}
