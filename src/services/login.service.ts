import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ResponseType';
import validation from '../utils/validateLogin';
import jwtUtil from '../utils/auth';

type TokenResponse = {
  token: string,
};

type TokenErrorResponse = {
  message: string,
};

async function VerifyLogin(username: string, password: string): 
Promise<ServiceResponse<TokenResponse | TokenErrorResponse>> {
  const valid = validation.validate(username, password);
  if (valid.status === 'SUCCESS') {
    const user = await UserModel.findOne({ where: { username } });
    console.log(user?.dataValues.password);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }
    const validPassword = bcrypt.compareSync(password, user.dataValues.password);

    if (!validPassword) {
      return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }
    const { dataValues } = user;

    const payload = { username: dataValues.username, password: dataValues.password };
    const tokenAut = jwtUtil.sign(payload);
    return { status: 'SUCCESS', data: { token: tokenAut } };
  }
  return valid;
}

export default {
  VerifyLogin,
};