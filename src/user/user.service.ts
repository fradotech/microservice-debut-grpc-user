import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/microservice/product/product.service';

@Injectable()
export class UserService {
  constructor(private readonly productService: ProductService) {}

  async findAll() {
    const products = await this.productService.findAll();
    const data = [
      { id: 1, name: 'John', products: products.data },
      { id: 2, name: 'Doe', products: products.data },
    ];

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
