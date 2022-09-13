import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAccountInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "account's background color" })
  bg: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "account's programming language" })
  language: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "account's programming language logo URL" })
  image: string;
}
