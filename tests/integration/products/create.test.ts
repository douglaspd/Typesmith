import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import response from '../../mocks/productMock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testar cadastrando um produto', async function () {
    const request = response.requestProduct;
    const mockCreate = ProductModel.build(request)
    sinon.stub(ProductModel, 'create').resolves(mockCreate);

    const httpRequest = {
      name: 'Martelo do Thor',
      price: '30 peças de ouro',
      userId: 1,
    }
    const httpResponse = await chai.request(app).post('/products').send(httpRequest);
    expect(httpResponse.status).to.equal(201);
    const { id } = httpResponse.body;
    expect(httpResponse.body).to.deep.equal({
      id:id,
      name: 'Martelo do Thor',
      price: '30 peças de ouro',
      userId: 1,
    })
  });
});
