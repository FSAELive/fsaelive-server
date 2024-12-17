// users.controller.ts
import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { MqttService } from './mqtt.service';

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern('IMT/#')
  getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
    this.mqttService.subscribeImt(data, context);
  }
}
