import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { PrismaService } from 'src/database/prisma.service';
import { ColorRepository } from './color.repository';

@Module({
  controllers: [ColorController],
  providers: [ColorService, ColorRepository, PrismaService],
})
export class ColorModule {}
