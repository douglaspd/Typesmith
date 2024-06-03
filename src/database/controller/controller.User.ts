import { Request, Response } from 'express';
import mapStatus from './mapStatus';
import userService from '../services/user.service';

async function list(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  const products = await userService.list();
  const { status, data } = products;
  return res.status(mapStatus(status)).json(data);
}

export default {
  list,
};