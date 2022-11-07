import { Controller, Get, NotFoundException, Res } from '@nestjs/common';
import { ok } from 'assert';
import { CityService } from './city.service';


@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(@Res() res) {
    let result = await this.cityService.findAll();
    result.subscribe(
      {
        next(value) {
          res.send(value.data);
        },
        error(err) {
          throw new NotFoundException(err);
        },
      }
    )
  }

}
