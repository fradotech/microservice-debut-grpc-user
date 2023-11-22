import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'FindAll')
  findAll() {
    return this.productService.findAll();
  }

  @GrpcMethod('ProductService', 'FindOne')
  findOne(@Payload() id: number) {
    return this.productService.findOne(id);
  }
}
