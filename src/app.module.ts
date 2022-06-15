import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateController } from './create/create.controller';
import { SpinController } from './spin/spin.controller';

@Module({
  imports: [],
  controllers: [AppController, CreateController, SpinController],
  providers: [AppService],
})
export class AppModule {}
