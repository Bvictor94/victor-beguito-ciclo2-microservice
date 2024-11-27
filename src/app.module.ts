import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, StatusController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
