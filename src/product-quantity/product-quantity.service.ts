import { Injectable } from '@nestjs/common';
import { ProductQuantity } from './entities/product-quantity.entity';

@Injectable()
export class ProductQuantityService {
  getTotalWeight(productsQuantities: ProductQuantity[]) {
    let defaultWeight = 3;
    let totalWeight = 0;
    productsQuantities.forEach((productQuantity) => {
      totalWeight += productQuantity.product.weight * productQuantity.quantity;
    });
    if(isNaN(totalWeight)){
      return defaultWeight;
    }
    return totalWeight;
  }

  getTotalInsuredCost(productsQuantities: ProductQuantity[]) {
    let defaultTotalInsuredCost = 5000;
    let totalInsuredCost = 0;
    productsQuantities.forEach((productQuantity) => {
      totalInsuredCost += productQuantity.product.insuredCost * productQuantity.quantity;
    });
    if(isNaN(totalInsuredCost)){
      return defaultTotalInsuredCost;
    }
    return totalInsuredCost;
  }

  getNormalizedSide(productsQuantities: ProductQuantity[]) {
    let defaultSide = 10;
    let totalVolume = 0;
    let heigth;
    let width;
    let depth;
    productsQuantities.forEach((productQuantity) => {
      heigth = productQuantity.product.heigth;
      width = productQuantity.product.width;
      depth = productQuantity.product.depth;
      totalVolume += heigth * width * depth * productQuantity.quantity;
    });
    if(isNaN(totalVolume)){
      return defaultSide;
    }
    return Math.cbrt(totalVolume);
  }

  getCourierQuoteApiUrl(side: number, weight: number, insuredCost: number, cityId: number){
    let originCity = 463;
    let courierURL = `${process.env.COURIER_API_URL}/${originCity}/${cityId}/${side}/${side}/${side}/${weight}/${insuredCost}/2/es`;
    return courierURL;
  }
}
