import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Client } from './entities/client.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const foundClient = await this.prisma.user.findFirst({
      where: { email: createClientDto.email },
    });

    if (foundClient) {
      throw new ConflictException('User already exists.');
    }

    const client = new Client();
    Object.assign(client, { ...createClientDto });

    const createdClient = await this.prisma.user.create({
      data: { ...client },
    });

    return plainToInstance(Client, createdClient);
  }
  async findByEmail(email: string) {
    const foundClient = await this.prisma.user.findFirst({
      where: { email },
    });

    return foundClient;
  }

  async findAll() {
    const clients = await this.prisma.user.findMany();
    return plainToInstance(Client, clients);
  }

  async findOne(id: string) {
    const foundClient = await this.prisma.user.findUnique({ where: { id } });

    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }
    return plainToInstance(Client, foundClient);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const foundClient = await this.prisma.user.findUnique({ where: { id } });

    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }

    const updatedClient = await this.prisma.user.update({
      where: { id },
      data: { ...updateClientDto },
    });

    return plainToInstance(Client, updatedClient);
  }

  async remove(id: string) {
    const foundClient = await this.prisma.user.findUnique({ where: { id } });

    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }

    await this.prisma.user.delete({ where: { id } });
  }
}
