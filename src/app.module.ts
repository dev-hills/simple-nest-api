import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { MeModule } from './me/me.module';

@Module({
  imports: [HealthModule, MeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
