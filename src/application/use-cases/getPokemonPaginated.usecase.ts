import { Injectable } from '@nestjs/common';
import { IGetPokemonPaginated } from '../../core/use-cases/getPokemonPaginated.interface';
import { Pokemon } from '../../core/entities/pokemon.entity';
import { PokemonService } from '../../infrastructure/api/pokemon/pokemon.service';

@Injectable()
export class GetPokemonPaginatedUseCase implements IGetPokemonPaginated {
  constructor(private readonly pokemonService: PokemonService) {}

  public async execute(limit: number, offset: number): Promise<Pokemon[]> {
    return this.pokemonService.getPaginated(limit, offset);
  }
}
