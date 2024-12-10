import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Customer } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.prismaService.customer.create({
      data: {
        ...createCustomerDto,
      },
    });
  }

  async findCustomerByCpf(cpf: string): Promise<Customer | null> {
    return this.prismaService.customer.findUnique({
      where: {
        cpf,
        deleted_at: null,
      },
    });
  }

  async findCustomerByEmail(email: string) {
    return this.prismaService.customer.findUnique({
      where: {
        email,
        deleted_at: null,
      },
    });
  }
  async findCustomerById(id: string) {
    return this.prismaService.customer.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
  }
}
