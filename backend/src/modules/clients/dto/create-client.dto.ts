import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'Usuário padrão',
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'Email@mail.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'Telefone do usuário',
    type: String,
    default: '99988877766',
  })
  @MaxLength(11)
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
