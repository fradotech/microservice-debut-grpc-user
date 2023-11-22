import { Module } from '@nestjs/common';
import { join } from 'path';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  static readonly protoPackages = ['user'];
  static readonly protoPaths = [join(__dirname, 'user.proto')];
}
