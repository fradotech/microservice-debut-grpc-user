import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:5001',
          package: 'product',
          protoPath: join(__dirname, 'product/product.proto'),
        },
      },
    ]),
  ],
  controllers: [],
  providers: [ClientsModule, ProductService],
  exports: [ClientsModule, ProductService],
})
export class MicroserviceModule {}
