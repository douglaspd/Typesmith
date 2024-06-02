import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import mockResponse  from '../../mocks/responseProductMock';
import response from '../../mocks/productMock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa buscar produtos', async function() {
    const mockProducts = [
      ProductModel.build({ id: 1, name: 'Product 1', price: '10.0', userId: 1 }),
      ProductModel.build({ id: 2, name: 'Product 2', price: '20.0', userId: 2 })
    ];

    sinon.stub(ProductModel, 'findAll').resolves(mockProducts);
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(mockProducts.map(product => product.toJSON()));
  })
});
