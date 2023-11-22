import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const PRODUCT_OPTION: ClientProviderOptions = {
  name: 'PRODUCT_PACKAGE',
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5001',
    package: 'product',
    protoPath: join(__dirname, 'product.proto'),
  },
};
