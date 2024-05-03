import { Pokemon } from '../entities/pokemon.entity';

export interface IGetPokemonByColor {
  execute(color: string): Promise<Pokemon[]>;
}
