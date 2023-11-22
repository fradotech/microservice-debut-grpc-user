import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static readonly protoPackages = [...ProductModule.protoPackages];
  static readonly protoPaths = [...ProductModule.protoPaths];
}
