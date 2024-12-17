import { Controller, Get, MessageEvent, Res, Sse } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { interval, map, Observable } from 'rxjs';
import { MqttService } from '../mqtt/mqtt.service';
// import { interval, Observable } from 'rxjs';

@Controller()
export class SseController {
  constructor(private readonly mqttService: MqttService) {}

  // getMqttData(data: string): string {
  //   console.log(`########## DATA:${data}`);
  //   return data;
  // }

  @Get()
  index(@Res() response: Response) {
    response
      .type('text/html')
      .send(readFileSync(join(__dirname, 'index.html')).toString());
  }

  @Sse('sse')
  sse(data: string): Observable<MessageEvent> {
    return interval(1000).pipe(
      // map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
      // sseEmit()
      map((_) => ({ data }) as MessageEvent),
    );
  }
}
