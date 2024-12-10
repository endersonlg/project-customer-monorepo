import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ColorRepository } from 'src/color/color.repository';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    CustomerRepository,
    ColorRepository,
    PrismaService,
  ],
})
export class CustomerModule {}
