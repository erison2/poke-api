import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonModule } from './infrastructure/pokemon.module';

@Module({
  imports: [HttpModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
