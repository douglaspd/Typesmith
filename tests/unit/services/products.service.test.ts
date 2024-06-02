import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import ProductModel from '../../../src/database/models/product.model';
import response from '../../mocks/productMock';
import productService from '../../../src/database/services/product.service';

chai.use(sinonChai);

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Teste add um produto', async function () {
    const request = response.requestProduct;
    const mockCreate = ProductModel.build(request)
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const service = await productService.create(request);

    expect(service.status).to.eq('CREATED');
  })

});
