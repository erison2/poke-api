import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '../../http/http-client.interface';
import { PokemonNotFoundException } from './pokemonNotFound.exception';

@Injectable()
export class PokemonService {
  constructor(@Inject('HttpClient') private readonly httpService: HttpClient) {}

  public async getByIdOrName(idOrName: string) {
    try {
      const response = await lastValueFrom(
        this.httpService.get<any>(`https://pokeapi.co/api/v2/pokemon/${idOrName}`),
      );

      return response;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }

  public async getByColor(color: string) {
    try {
      const response = await lastValueFrom(
        this.httpService.get<any>(`https://pokeapi.co/api/v2/pokemon-color/${color}`),
      );

      return response.pokemon_species;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }

  public async getPaginated(offset: number, limit: number) {
    try {
      const response = await lastValueFrom(
        this.httpService.get<any>(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        ),
      );

      return response.results;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }
}
