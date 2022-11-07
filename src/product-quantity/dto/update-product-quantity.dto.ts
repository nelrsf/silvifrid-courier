import { PartialType } from '@nestjs/mapped-types';
import { CreateProductQuantityDto } from './create-product-quantity.dto';

export class UpdateProductQuantityDto extends PartialType(CreateProductQuantityDto) {}
