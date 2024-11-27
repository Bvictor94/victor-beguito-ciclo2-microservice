import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Controller('status')
export class StatusController {
  constructor(private readonly prisma: PrismaService) {}

  @MessagePattern('consultar_status')
  async consultarStatus(@Payload() data: { qtdPessoasNaFrente: number }): Promise<number> {
    const pessoasNaFrente = data.qtdPessoasNaFrente;
    return pessoasNaFrente + 1; 
  }
}
