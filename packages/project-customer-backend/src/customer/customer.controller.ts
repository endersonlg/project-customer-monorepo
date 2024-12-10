import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post('/')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }
}
