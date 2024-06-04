import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controller/controlle.Login';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Teste recebendo um usuário correto', async function() {
    req.body = { username: 'string', password: 'string'};
    const serviceResponse = {
      status: 'SUCCESS',
      data: { token: 'hashasjhajhkaskashjska'}
    };
    sinon.stub(loginService, 'VerifyLogin').resolves(serviceResponse);
    await loginController.VerifyLogin(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith({ token: 'hashasjhajhkaskashjska' });
  })

});
