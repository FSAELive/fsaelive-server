import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { MicroservicesModule } from './microservices/microservices.module';

@Module({
  imports: [CommonModule, CoreModule, MicroservicesModule],
})
export class AppModule {}
