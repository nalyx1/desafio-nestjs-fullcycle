import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAssetDto: CreateAssetDto) {
    return this.prismaService.asset.create({
      data: createAssetDto,
    });
  }

  async findAll() {
    return this.prismaService.asset.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
}
