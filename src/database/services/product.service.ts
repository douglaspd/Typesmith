import { Product } from '../../types/Product';
import { ServiceResponse } from '../../types/ResponseType';
import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel } from '../models/product.model';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  if (!newProduct) {
    return { status: 'INVALID_DATA', data: { message: 'Falied Created' } };
  }
  return { status: 'CREATED', data: newProduct.dataValues };
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  if (!products) {
    return { status: 'INVALID_DATA', data: { message: 'Falied Created' } };
  }
  return { status: 'SUCCESS', data: products };
}

export default {
  create,
  list,
};