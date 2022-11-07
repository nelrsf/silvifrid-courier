import { Controller, Post, Body, Res} from '@nestjs/common';
import { ProductQuantityService } from './product-quantity.service';
import { Courier } from './entities/product-quantity.entity';
import { HttpService } from '@nestjs/axios';

@Controller('product-quantity')
export class ProductQuantityController {
  constructor(private productQuantityService: ProductQuantityService, private httpService: HttpService) { }

  @Post("/getcourierquote")
  getCourierQuote(@Body() courierInfo: Courier, @Res() res) {
    let productsQuantities = courierInfo.productQuantities;
    let cityId = courierInfo.cityId;
    let weight = this.productQuantityService.getTotalWeight(productsQuantities);
    let side = this.productQuantityService.getNormalizedSide(productsQuantities);
    let insuredCost = this.productQuantityService.getTotalInsuredCost(productsQuantities);
    let quoteUrl = this.productQuantityService.getCourierQuoteApiUrl(side, weight, insuredCost, cityId);
    this.httpService.get(quoteUrl).subscribe(
      (value)=>{
        res.send(value.data);
      }
    );
  }
}
