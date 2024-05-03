import { Pokemon } from '../entities/pokemon.entity';

export interface IGetPokemonPaginated {
  execute(limit: number, offset: number): Promise<Pokemon[]>;
}
