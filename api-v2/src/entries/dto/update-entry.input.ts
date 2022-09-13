import { CreateEntryInput } from './create-entry.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
