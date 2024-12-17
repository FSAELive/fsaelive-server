import { Module } from '@nestjs/common';
import { MqttModule } from './mqtt/mqtt.module';
import { SseModule } from './sse/sse.module';
// import { MqttService } from './mqtt/mqtt.service';
// import { SseService } from './sse/sse.service';
// import { SseController } from './sse/sse.controller';

@Module({
  imports: [MqttModule, SseModule],
  providers: [],
})
export class MicroservicesModule {}
