import { Module } from '@nestjs/common';
import { join } from 'path';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static readonly protoPackages = ['product'];
  static readonly protoPaths = [join(__dirname, 'product/product.proto')];
}
