import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import controllerProducts from '../../../src/controller/controller.Products';
import response  from '../../mocks/productMock';
import mapStatus from '../../../src/controller/mapStatus';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('Teste função MapStatus', function() {
    it('Testando a função com SUCCESS', function () {
     const map =  mapStatus('SUCCESS');
     expect(map).to.be.equal(200);
    })
    it('Testando a função com CREATED', function () {
     const map =  mapStatus('CREATED');
     expect(map).to.be.equal(201);
    })
    it('Testando a função com INVALID_DATA', function () {
     const map =  mapStatus('INVALID_DATA');
     expect(map).to.be.equal(400);
    })
    it('Testando a função com UNAUTHORIZED', function () {
     const map =  mapStatus('UNAUTHORIZED');
     expect(map).to.be.equal(401);
    })
    it('Testando a função com NOT FOUND', function () {
     const map =  mapStatus('NOT_FOUND');
     expect(map).to.be.equal(404);
    })
  })
  it('Testando add um produto', async function() {
    sinon.stub(productService, 'create').resolves({
      status: 'CREATED',
      data: response.responseCreated,
    })
    req.body = response.requestProduct;

    await controllerProducts.create(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(response.responseCreated);
  })
});
