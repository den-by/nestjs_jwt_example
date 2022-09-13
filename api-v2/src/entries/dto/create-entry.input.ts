import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEntryInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "entry's background color" })
  bg: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "entry's programming language" })
  language: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "entry's programming language logo URL" })
  image: string;
}
