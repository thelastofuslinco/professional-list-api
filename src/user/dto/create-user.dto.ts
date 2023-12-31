import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ArrayMinSize,
  ArrayMaxSize,
  Length,
  IsEmail,
  IsArray,
  IsBoolean,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Length(14, 14)
  @ApiProperty()
  cpf: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  password: string;

  @IsBoolean()
  @Type(() => Boolean)
  @IsOptional()
  @ApiProperty({ default: false, required: false })
  authenticated?: boolean;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @ApiProperty()
  skills: string[];
}
