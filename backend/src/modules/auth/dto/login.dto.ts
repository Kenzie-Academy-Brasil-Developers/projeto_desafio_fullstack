import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário(Já cadastrado)',
    type: String,
    default: 'Email@mail.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário(Já cadastrado)',
    type: String,
    default: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
