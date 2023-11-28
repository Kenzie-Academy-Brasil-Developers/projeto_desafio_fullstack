import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('')
  async login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData.email, loginData.password);
  }
}
