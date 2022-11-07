import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductQuantityModule } from './product-quantity/product-quantity.module';
import { CityModule } from './city/city.module';


@Module({
  imports: [ProductQuantityModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
