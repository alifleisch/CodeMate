import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  getProfile(): string {
    return 'Hello World!';
  }
}
