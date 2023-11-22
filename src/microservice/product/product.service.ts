import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PRODUCT_OPTION } from './product.option';

interface IProductService {
  findAll({}): Observable<any>;
  findOne({}): Observable<any>;
}

@Injectable()
export class ProductService implements OnModuleInit, IProductService {
  constructor(@Inject(PRODUCT_OPTION.name) private client: ClientGrpc) {}

  private productService: IProductService;

  onModuleInit() {
    this.productService =
      this.client.getService<IProductService>('ProductService');
  }

  findAll(): Observable<string> {
    return this.productService.findAll({ id: 1 });
  }

  findOne(): Observable<string> {
    return this.productService.findOne({ id: 1 });
  }
}
