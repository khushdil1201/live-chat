import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  providers: [AppService, AppGateway, PrismaService],
})
export class AppModule {}
