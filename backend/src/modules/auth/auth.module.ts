import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '../clients/clients.module';
import { JwtStrategy } from './jwt.strategy';
import { Passport } from 'passport';

@Module({
  imports: [
    ClientsModule,
    Passport,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
