import { ServiceResponse } from '../../types/ResponseType';
import UserModel, { UserSequelizeModel } from '../models/user.model';

async function list(): Promise<ServiceResponse<UserSequelizeModel[]>> {
  const products = await UserModel.findAll();
  if (!products) {
    return { status: 'INVALID_DATA', data: { message: 'Falied Created' } };
  }
  return { status: 'SUCCESS', data: products };
}

export default {
  list,
};