import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import userService from '../../../src/services/user.service';
import userController from '../../../src/controller/controller.User';

chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Teste da camada de controller', async function() {
    const serviceResponse = {
      status: 'SUCCESS',
      data: [{ username: 'xablau', productIds: [1,2]}]}
    
    sinon.stub(userService, 'list').resolves(serviceResponse);
    await userController.list(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith([{ username: 'xablau', productIds: [1,2]}]);
  })

});
