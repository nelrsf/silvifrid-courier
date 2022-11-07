import { Test, TestingModule } from '@nestjs/testing';
import { ProductQuantityController } from './product-quantity.controller';
import { ProductQuantityService } from './product-quantity.service';

describe('ProductQuantityController', () => {
  let controller: ProductQuantityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductQuantityController],
      providers: [ProductQuantityService],
    }).compile();

    controller = module.get<ProductQuantityController>(ProductQuantityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
