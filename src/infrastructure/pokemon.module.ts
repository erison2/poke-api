import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './api/pokemon/pokemon.controller';
import { PokemonService } from './api/pokemon/pokemon.service';
import { GetPokemonByColorUseCases } from '../application/use-cases/getPokemonByColor.usecase';
import { GetPokemonByIdOrNameUseCase } from '../application/use-cases/getPokemonByIdOrName.usecase';
import { GetPokemonPaginatedUseCase } from '../application/use-cases/getPokemonPaginated.usecase';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [
    PokemonService,
    { provide: 'IGetPokemonByColor', useClass: GetPokemonByColorUseCases },
    { provide: 'IGetPokemonByIdOrName', useClass: GetPokemonByIdOrNameUseCase },
    { provide: 'IGetPokemonPaginated', useClass: GetPokemonPaginatedUseCase },
  ],
})
export class PokemonModule {}
