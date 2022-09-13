import { CreateTransactionInput } from './create-transaction.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTransactionInput extends PartialType(CreateTransactionInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
