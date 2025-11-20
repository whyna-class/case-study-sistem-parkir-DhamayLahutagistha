// src/parkir/parkir.module.ts
import { Module } from '@nestjs/common';
import { ParkirService } from './parkir.service';
import { ParkirController } from './parkir.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Pastikan import ini ada

@Module({
  imports: [PrismaModule], // <-- WAJIB ADA
  controllers: [ParkirController],
  providers: [ParkirService],
})
export class ParkirModule {}