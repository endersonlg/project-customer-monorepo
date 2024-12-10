import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database connection established');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      process.exit(1);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Disconnected from the database');
  }
}
