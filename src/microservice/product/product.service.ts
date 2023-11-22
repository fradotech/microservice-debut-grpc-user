import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';
import { IProduct } from './product.interface';
import { PRODUCT_OPTION } from './product.option';

interface IProductService {
  findAll({}): Observable<{ data: IProduct[] }>;
  findOne({}): Observable<IProduct>;
}

@Injectable()
export class ProductService {
  constructor(@Inject(PRODUCT_OPTION.name) private client: ClientGrpc) {}

  private readonly productService: IProductService =
    this.client.getService('ProductService');

  async findAll(): Promise<{ data: IProduct[] }> {
    return await lastValueFrom(this.productService.findAll({}));
  }

  async findOne(id: number): Promise<IProduct> {
    return await lastValueFrom(this.productService.findOne({ id }));
  }
}
