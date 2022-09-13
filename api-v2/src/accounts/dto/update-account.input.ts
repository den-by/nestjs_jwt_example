import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
