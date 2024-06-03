import { ServiceResponse } from '../../types/ResponseType';
import ProductModel, { ProductSequelizeModel } from '../models/product.model';
import UserModel, { UserSequelizeModel } from '../models/user.model';

type UserResponse = {
  username: string,
  productIds: number[],
};

async function list(): Promise<ServiceResponse<UserResponse[]>> {
  const users = await UserModel.findAll({ 
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] } });
  console.log(users);
  if (!users) {
    return { status: 'INVALID_DATA', data: { message: 'Falied Created' } };
  }

  const formatedUsers = users.map((user) => {
    const { dataValues } = user;
    const { productIds } = dataValues;

    const response = {
      username: dataValues.username,
      productIds: productIds?.map((product) => product.id),
    };
    return response;
  });
  return { status: 'SUCCESS', data: formatedUsers as UserResponse[] };
}

export default {
  list,
};