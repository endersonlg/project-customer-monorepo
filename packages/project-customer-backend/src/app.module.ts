import { Module } from '@nestjs/common';
import { ColorModule } from './color/color.module';
import { PrismaService } from './database/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CustomerModule,
    ColorModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
