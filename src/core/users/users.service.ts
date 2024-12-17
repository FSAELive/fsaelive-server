// users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string {
    return 'This action returns all users';
  }
}
