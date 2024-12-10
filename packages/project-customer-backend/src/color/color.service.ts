import { ConflictException, Injectable } from '@nestjs/common';
import { ColorRepository } from './color.repository';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorService {
  constructor(private readonly colorRepository: ColorRepository) {}

  async create(createColorDto: CreateColorDto) {
    const colorExists = await this.colorRepository.findByName(
      createColorDto.name,
    );

    if (colorExists) {
      throw new ConflictException('There is already a color with this name.');
    }

    return this.colorRepository.create(createColorDto);
  }

  async findAll() {
    return this.colorRepository.findAll();
  }
}
