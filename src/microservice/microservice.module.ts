import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { PRODUCT_OPTION } from './product/product.option';
import { ProductService } from './product/product.service';

@Module({
  imports: [ClientsModule.register([PRODUCT_OPTION])],
  controllers: [],
  providers: [ClientsModule, ProductService],
  exports: [ClientsModule, ProductService],
})
export class MicroserviceModule {}
