import { Controller, Get } from '@nestjs/common';
import { MeService } from './me.service';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  getMe(): { name: string; email: string; github: string } {
    return this.meService.getMe();
  }
}
