import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
// import { MqttController } from '../mqtt/mqtt.controller';
// import { SseService } from './sse.service';

@Module({
  controllers: [SseController],
  // providers: [MqttController],
})
export class SseModule {}
