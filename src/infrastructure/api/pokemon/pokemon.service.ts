import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { PokemonNotFoundException } from './pokemonNotFound.exception';

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  public async getByIdOrName(idOrName: string) {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`),
      );

      return response.data;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }

  public async getByColor(color: string) {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`https://pokeapi.co/api/v2/pokemon-color/${color}`),
      );

      return response.data.pokemon_species;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }

  public async getPaginated(limit: number, offset: number) {
    try {
      const response = await lastValueFrom(
        this.httpService.get('https://pokeapi.co/api/v2/pokemon', {
          params: { limit, offset },
        }),
      );

      return response.data.results;
    } catch (error) {
      throw new PokemonNotFoundException();
    }
  }
}
