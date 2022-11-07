import { Module } from '@nestjs/common';
import { ProductQuantityService } from './product-quantity.service';
import { ProductQuantityController } from './product-quantity.controller';
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [ProductQuantityController],
  providers: [ProductQuantityService]
})
export class ProductQuantityModule {}
