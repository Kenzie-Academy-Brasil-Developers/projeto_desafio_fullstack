import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  name: string;
  email: string;
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
