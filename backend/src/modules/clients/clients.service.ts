import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  private clients: Client[] = [];
  create(createClientDto: CreateClientDto) {
    const client = new Client();
    Object.assign(client, { ...createClientDto });
    this.clients.push(client);
    return client;
  }

  findAll() {
    return this.clients;
  }

  findOne(id: string) {
    const foundClient = this.clients.find((client) => client.id === id);
    return foundClient;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    const clientIndex = this.clients.findIndex((user) => user.id === id);
    this.clients[clientIndex] = {
      ...this.clients[clientIndex],
      ...updateClientDto,
    };
  }

  remove(id: string) {
    const clientIndex = this.clients.findIndex((user) => user.id === id);
    this.clients.splice(clientIndex, 1);
  }
}
