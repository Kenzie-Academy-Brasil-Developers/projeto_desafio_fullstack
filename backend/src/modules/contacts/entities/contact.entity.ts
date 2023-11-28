import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  full_name: string;
  email: string;
  telephone: string;
  register_date: string;

  constructor() {
    this.id = randomUUID();
  }
}
