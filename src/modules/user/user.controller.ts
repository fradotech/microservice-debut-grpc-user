import { Controller, Get, Param } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly productService: UserService) {}

  @Get()
  @GrpcMethod('UserService')
  findAll() {
    return this.productService.findWithProduct();
  }

  @Get(':id')
  @GrpcMethod('UserService')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }
}
