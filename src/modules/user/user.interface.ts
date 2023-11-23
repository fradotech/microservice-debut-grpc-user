import { IProduct } from 'src/microservice/product/product.interface';

export interface IUser {
  id: number;
  name: string;
  email: string;
  roles?: Record<string, unknown>[];
  products?: IProduct[];
}
