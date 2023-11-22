import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService')
  findAll() {
    return this.productService.findAll();
  }

  @GrpcMethod('ProductService')
  findOne(@Payload() id: number) {
    return this.productService.findOne(id);
  }
}
