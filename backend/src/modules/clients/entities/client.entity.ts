import { randomUUID } from 'node:crypto';
import { Exclude } from 'class-transformer';

export class Client {
  readonly id: string;
  full_name: string;
  email: string;
  telephone: string;
  register_date: string;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
