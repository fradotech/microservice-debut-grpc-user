import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { PRODUCT_OPTION } from './product/product.option';

@Module({
  imports: [ClientsModule.register([PRODUCT_OPTION])],
  controllers: [],
  providers: [],
})
export class MicroserviceModule {}
