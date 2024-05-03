import { Pokemon } from '../entities/pokemon.entity';

export interface IGetPokemonByIdOrName {
  execute(idOrName: string): Promise<Pokemon>;
}
