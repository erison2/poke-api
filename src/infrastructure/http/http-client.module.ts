import { Module } from '@nestjs/common';
import { AxiosHttpClient } from './axios-http-client';

@Module({
  providers: [{ provide: 'HttpClient', useClass: AxiosHttpClient }],
})
export class HttpClientModule {}
