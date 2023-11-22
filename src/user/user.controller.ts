import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('products')
export class UserController {
  constructor(private readonly productService: UserService) {}

  @GrpcMethod('UserService')
  findAll() {
    return this.productService.findAll();
  }

  @GrpcMethod('UserService')
  findOne(@Payload() id: number) {
    return this.productService.findOne(id);
  }
}
