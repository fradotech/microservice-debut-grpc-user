import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from '@prisma/client';
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

  @Post()
  @GrpcMethod('UserService')
  create(@Body() req: User) {
    return this.productService.create(req);
  }
}
