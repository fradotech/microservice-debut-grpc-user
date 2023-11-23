import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductService } from 'src/microservice/product/product.service';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService,
  ) {}

  readonly repository = this.prisma.user;

  async findWithProduct() {
    const data: IUser[] = await this.repository.findMany();
    const products = await this.productService.findAll();

    for (const user of data) {
      user.products = products.data;
    }

    return data;
  }

  async findOne(id: number) {
    return {
      id: 1,
      name: 'John',
      product: await this.productService.findOne(id),
    };
  }
}
