import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'

@Injectable()
export class CityService {

  constructor(private readonly httpService: HttpService){

  }

  findAll() {
    return this.httpService.get(process.env.CITIES_API);
  }
}
