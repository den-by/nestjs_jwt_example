import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateContactInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Related company' })
  companyId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Contact  type' })
  type: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'Contact name' })
  name: string;
}
