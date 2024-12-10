import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ColorRepository } from 'src/color/color.repository';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly colorRepository: ColorRepository,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const cpfExists = await this.customerRepository.findCustomerByCpf(
      createCustomerDto.cpf,
    );

    if (cpfExists) {
      throw new ConflictException('There is already a customer with this cpf.');
    }

    const emailExists = await this.customerRepository.findCustomerByEmail(
      createCustomerDto.email,
    );

    if (emailExists) {
      throw new ConflictException(
        'There is already a customer with this e-mail.',
      );
    }

    const colorExists = await this.colorRepository.findColorById(
      createCustomerDto.preferred_color_id,
    );

    if (!colorExists) {
      throw new NotFoundException('There is no color with the provided ID.');
    }

    return this.customerRepository.create(createCustomerDto);
  }

  async findOne(id: string) {
    const customer = await this.customerRepository.findCustomerById(id);

    if (!customer) {
      throw new NotFoundException('There is no customer with the provided ID.');
    }

    return customer;
  }
}
