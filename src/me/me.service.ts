import { Injectable } from '@nestjs/common';

@Injectable()
export class MeService {
  getMe(): { name: string; email: string; github: string } {
    return {
      name: 'Hilary Emujede',
      email: 'hilaryemujede48@gmail.com',
      github: 'https://github.com/dev-hills',
    };
  }
}
