import { Module } from '@nestjs/common';
import { MicroserviceModule } from './microservice/microservice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MicroserviceModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static readonly protoPackages = [...UserModule.protoPackages];
  static readonly protoPaths = [...UserModule.protoPaths];
}
