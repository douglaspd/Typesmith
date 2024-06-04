import { Request, Response } from 'express';
import mapStatus from './mapStatus';
import loginService from '../services/login.service';

async function VerifyLogin(req: Request, res: Response):
Promise<Response<any, Record<string, any>>> {
  const { username, password } = req.body;
  const login = await loginService.VerifyLogin(username, password);
  const { status, data } = login;
  return res.status(mapStatus(status)).json(data);
}

export default {
  VerifyLogin,
};