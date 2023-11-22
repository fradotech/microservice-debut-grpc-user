import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: AppModule.protoPackages,
        protoPath: AppModule.protoPaths,
        url: 'localhost:5001',
      },
    },
  );

  await app.listen();
}
bootstrap();
