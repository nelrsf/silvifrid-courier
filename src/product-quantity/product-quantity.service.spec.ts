import { Test, TestingModule } from '@nestjs/testing';
import { ProductQuantityService } from './product-quantity.service';

describe('ProductQuantityService', () => {
  let service: ProductQuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductQuantityService],
    }).compile();

    service = module.get<ProductQuantityService>(ProductQuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
