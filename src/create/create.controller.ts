import { Controller, Get, Session } from '@nestjs/common';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

@Controller('create')
export class CreateController {

  @Get()
  createSession(@Session() session) {
    const userActiveBalance: string = '500';

    session.activeBalance = userActiveBalance;

    console.log(session.activeBalance)
    return userActiveBalance;
  }
}
