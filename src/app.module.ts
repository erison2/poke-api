import { Module } from '@nestjs/common';
import { HttpClientModule } from './infrastructure/http/http-client.module';
import { PokemonModule } from './infrastructure/pokemon.module';

@Module({
  imports: [HttpClientModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
