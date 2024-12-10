import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { IsHexColor } from 'src/decorators/is-hex-color';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @Transform(({ value }) => value.trim().toLowerCase())
  name: string;

  @IsString()
  @IsHexColor()
  @IsNotEmpty()
  hex_value: string;
}
