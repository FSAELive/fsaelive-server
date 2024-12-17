import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrapMqtt() {
  const appMqtt = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://mqtt.maua.br:1883',
      },
    },
  );
  await appMqtt.listen();
}
bootstrapMqtt();

async function bootstrapSse() {
  const appSse = await NestFactory.create(AppModule, {
    forceCloseConnections: true,
  });
  appSse.enableShutdownHooks();
  await appSse.listen(3000);
  console.log(`appSselication is running on: ${await appSse.getUrl()}`);
}
bootstrapSse();
