import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { ColorService } from './color.service';

@Controller('/colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}
  @Post('/')
  async create(
    @Body() createColorDto: CreateColorDto,
  ): Promise<CreateColorDto> {
    return this.colorService.create(createColorDto);
  }

  @Get('/')
  async findAll() {
    console.log(process.env.PORT || 3001);
    return this.colorService.findAll();
  }
}
