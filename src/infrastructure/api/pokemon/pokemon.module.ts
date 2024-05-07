import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { GetPokemonByColorUseCases } from '../../../application/use-cases/getPokemonByColor.usecase';
import { GetPokemonByIdOrNameUseCase } from '../../../application/use-cases/getPokemonByIdOrName.usecase';
import { GetPokemonPaginatedUseCase } from '../../../application/use-cases/getPokemonPaginated.usecase';
import { AxiosHttpClient } from '../../http/axios-http-client';
import { HttpClientModule } from '../../http/http-client.module';

@Module({
  imports: [HttpClientModule],
  controllers: [PokemonController],
  providers: [
    { provide: 'HttpClient', useClass: AxiosHttpClient },
    { provide: 'IGetPokemonByColor', useClass: GetPokemonByColorUseCases },
    { provide: 'IGetPokemonByIdOrName', useClass: GetPokemonByIdOrNameUseCase },
    { provide: 'IGetPokemonPaginated', useClass: GetPokemonPaginatedUseCase },
    PokemonService,
  ],
})
export class PokemonModule {}
