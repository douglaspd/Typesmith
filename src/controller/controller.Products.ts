import { Request, Response } from 'express';
import mapStatus from './mapStatus';
import productService from '../services/product.service';

async function create(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  const { name, price, userId } = req.body;
  const products = await productService.create({ name, price, userId });
  const { status, data } = products;
  return res.status(mapStatus(status)).json(data);
}

async function list(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  const products = await productService.list();
  const { status, data } = products;
  return res.status(mapStatus(status)).json(data);
}

export default {
  create,
  list,
};