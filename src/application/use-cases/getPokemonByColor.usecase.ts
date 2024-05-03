import { Injectable } from '@nestjs/common';
import { IGetPokemonByColor } from '../../core/use-cases/getPokemonByColor.interface';
import { Pokemon } from '../../core/entities/pokemon.entity';
import { PokemonService } from '../../infrastructure/api/pokemon/pokemon.service';

@Injectable()
export class GetPokemonByColorUseCases implements IGetPokemonByColor {
  constructor(private readonly pokemonService: PokemonService) {}

  public async execute(color: string): Promise<Pokemon[]> {
    return this.pokemonService.getByColor(color);
  }
}
