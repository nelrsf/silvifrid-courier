import { Controller, Get, NotFoundException, Res } from '@nestjs/common';
import { CityService } from './city.service';


@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/getcities')
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
