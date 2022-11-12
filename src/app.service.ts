import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenido';
  }

  getUsers(): string[] {
    return ['yeison', 'daniela', 'santi', 'bebe'];
  }
}
