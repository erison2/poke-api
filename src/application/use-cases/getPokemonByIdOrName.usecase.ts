import { IGetPokemonByIdOrName } from '../../core/use-cases/getPokemonByIdOrName.interface';
import { Injectable } from '@nestjs/common';
import { Pokemon } from '../../core/entities/pokemon.entity';
import { PokemonService } from 'src/infrastructure/api/pokemon/pokemon.service';

@Injectable()
export class GetPokemonByIdOrNameUseCase implements IGetPokemonByIdOrName {
  constructor(private readonly pokemonService: PokemonService) {}

  async execute(idOrName: string): Promise<Pokemon> {
    return this.pokemonService.getByIdOrName(idOrName);
  }
}
