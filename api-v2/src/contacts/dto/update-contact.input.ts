import { CreateContactInput } from './create-contact.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
