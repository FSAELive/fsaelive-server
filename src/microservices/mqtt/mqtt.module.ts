import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
import { SseController } from '../sse/sse.controller';
// import { SseController } from '../sse/sse.controller';
// import { SseModule } from '../sse/sse.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://mqtt.maua.br:1883',
        },
      },
    ]),
  ],
  controllers: [MqttController, SseController],
  providers: [MqttService],
})
export class MqttModule {}
