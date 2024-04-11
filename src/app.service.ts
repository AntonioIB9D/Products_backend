import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World uwu ✨';
  }
  getUsers(): string[] {
    return ['Hola1', 'Hola2'];
  }
}
