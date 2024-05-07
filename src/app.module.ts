import { Module } from '@nestjs/common';
import { HttpClientModule } from './infrastructure/http/http-client.module';
import { PokemonModule } from './infrastructure/api/pokemon/pokemon.module';

@Module({
  imports: [HttpClientModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
