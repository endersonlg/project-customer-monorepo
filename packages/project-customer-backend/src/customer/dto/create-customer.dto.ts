import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsUUID,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { IsCPF } from 'src/decorators/is-cpf';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @MaxLength(255)
  name: string;

  @IsString()
  @Length(11, 11)
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'CPF must contain only numbers' })
  @IsCPF({ message: 'Invalid CPF' }, process.env.NODE_ENV !== 'production')
  cpf: string;

  @IsEmail()
  @Transform(({ value }) => value.trim().toLowerCase())
  @MaxLength(320)
  email: string;

  @IsUUID()
  preferred_color_id: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  observation?: string;
}
