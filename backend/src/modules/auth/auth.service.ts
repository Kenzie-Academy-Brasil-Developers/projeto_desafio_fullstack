import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.clientService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    const passwordMatch: boolean = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    return { token: this.jwtService.sign({ email }, { subject: user.id }) };
  }
}
