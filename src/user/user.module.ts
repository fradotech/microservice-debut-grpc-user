import { Module } from '@nestjs/common';
import { join } from 'path';
import { MicroserviceModule } from 'src/microservice/microservice.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MicroserviceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  static readonly protoPackages = ['user'];
  static readonly protoPaths = [join(__dirname, 'user.proto')];
}
