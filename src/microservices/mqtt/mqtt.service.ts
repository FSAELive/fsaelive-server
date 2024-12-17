// users.service.ts
import { Injectable } from '@nestjs/common';
import { SseController } from '../sse/sse.controller';
import { MqttContext } from '@nestjs/microservices';

@Injectable()
export class MqttService {
  constructor(private readonly sseController: SseController) {}

  subscribeImt(data: number[], context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`);
    // console.log(`Args: ${context.getArgs()}`);
    // console.log(`Packet: ${JSON.stringify(context.getPacket())}`);
    // console.log(`ArgByIndex: ${context.getArgByIndex(0)}`);
    console.log(`data: ${JSON.stringify(data)}`);
    console.log('\n');
    // return JSON.stringify(data);
    // return this.sseController.getMqttData(JSON.stringify(data));
    return this.sseController.sse(JSON.stringify(data));
  }
}
