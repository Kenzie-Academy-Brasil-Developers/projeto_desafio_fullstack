import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto, clientId: string) {
    const foundContact = await this.prisma.contact.findUnique({
      where: { email: createContactDto.email },
    });

    if (foundContact) {
      throw new ConflictException('User already exists.');
    }

    const contact = new Contact();
    Object.assign(contact, { ...createContactDto });

    const newContact = await this.prisma.contact.create({
      data: { ...contact, clientId },
    });

    return newContact;
  }

  async findAll(clientId: string) {
    const foundClient = await this.prisma.user.findUnique({
      where: { id: clientId },
    });
    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }
    return this.prisma.contact.findMany({ where: { clientId } });
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
    clientId: string,
  ) {
    const foundClient = await this.prisma.user.findUnique({
      where: { id: clientId },
    });
    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }
    return this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });
  }

  async remove(id: string, clientId: string) {
    const foundClient = await this.prisma.user.findUnique({
      where: { id: clientId },
    });
    if (!foundClient) {
      throw new NotFoundException('User not found.');
    }
    await this.prisma.contact.delete({ where: { id } });
  }
}
