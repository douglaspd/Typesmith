import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/userMock'
import userService from '../../../src/services/user.service';


describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testando buscar usuários no banco', async function() {
    const response = userMock;
    const createMock = UserModel.build(response);
    sinon.stub(UserModel, 'findAll').resolves([createMock]);

    const user = await userService.list();

    expect(user.status).to.be.eq('SUCCESS');
  })
});
