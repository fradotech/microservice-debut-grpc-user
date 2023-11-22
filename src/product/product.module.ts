import { Module } from '@nestjs/common';
import { join } from 'path';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {
  static readonly protoPackages = ['product'];
  static readonly protoPaths = [join(__dirname, 'product.proto')];
}
