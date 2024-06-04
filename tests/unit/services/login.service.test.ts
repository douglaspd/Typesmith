import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/loginMock';
import UserModel from '../../../src/database/models/user.model';
import loginService  from '../../../src/services/login.service';
import validateLogin from '../../../src/utils/validateLogin';
import userMock from '../../mocks/userMock';
import bcrypt from 'bcryptjs';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testando o login com informações corretas', async function() {
    const response = loginMock.loginMockSuccess;
    const createMock = UserModel.build(response);
    sinon.stub(UserModel, 'findOne').resolves(createMock);

    const login = await UserModel.findOne({where: { username: 'Xablau' }});
    expect(login?.dataValues.username).to.contain('Xablau');
  })
  it('Testando o login retornando o token', async function() {
    userMock.dataValues = {... userMock};
    const createMock = UserModel.build(userMock);
    sinon.stub(UserModel, 'findOne').resolves(createMock);
    sinon.stub(validateLogin, 'validate').resolves({ status: 'SUCCESS' });

    const userLogin = {
      username: 'string',
      password: 'string',
    }

    const result = await loginService.VerifyLogin(userLogin.username, userLogin.password);
    expect(result.status).to.be.eq('SUCCESS');
    })
  it('Testando o login sem user no banco de dados', async function() {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const userLogin = {
      username: 'string',
      password: 'string',
    }

    const result = await loginService.VerifyLogin(userLogin.username, userLogin.password);
    expect(result.status).to.be.eq('UNAUTHORIZED');
    })


});
