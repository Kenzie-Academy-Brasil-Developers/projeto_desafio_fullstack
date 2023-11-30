import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'contato1',
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    description: 'Nome do email do contato(Ainda não registrado)',
    type: String,
    default: 'contato1@mail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do contato',
    type: String,
    default: '99988877766',
  })
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
