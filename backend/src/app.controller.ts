import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('trips')
  getTrips() {
    return this.appService.getTrips();
  }

  @Post('trips')
  createTrip(@Body() payload: any) {
    return this.appService.createTrip(payload);
  }
}
