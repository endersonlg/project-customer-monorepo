import { Injectable } from '@nestjs/common';
import { Color } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, hex_value }: CreateColorDto): Promise<Color> {
    return await this.prisma.color.create({
      data: {
        name,
        hex_value,
      },
    });
  }

  async findByName(name: string): Promise<Color | null> {
    return this.prisma.color.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
        deleted_at: null,
      },
    });
  }

  async findAll(): Promise<Color[]> {
    return this.prisma.color.findMany({
      where: {
        deleted_at: null,
      },
    });
  }

  async findColorById(id: string) {
    return this.prisma.color.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
  }
}
