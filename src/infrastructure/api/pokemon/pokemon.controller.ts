import { Controller, Get, Param, Query, Inject } from '@nestjs/common';
import { IGetPokemonByColor } from '../../../core/use-cases/getPokemonByColor.interface';
import { IGetPokemonByIdOrName } from '../../../core/use-cases/getPokemonByIdOrName.interface';
import { IGetPokemonPaginated } from '../../../core/use-cases/getPokemonPaginated.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(
    @Inject('IGetPokemonByColor') private readonly pokemonByColor: IGetPokemonByColor,
    @Inject('IGetPokemonByIdOrName') private readonly pokemonByIdOrName: IGetPokemonByIdOrName,
    @Inject('IGetPokemonPaginated') private readonly pokemonPaginated: IGetPokemonPaginated,
  ) {}

  @Get('/:idOrName')
  public getPokemonByIdOrName(@Param('idOrName') idOrName: string) {
    return this.pokemonByIdOrName.execute(idOrName);
  }

  @Get('/color/:color')
  public getPokemonByColor(@Param('color') color: string) {
    return this.pokemonByColor.execute(color);
  }

  @Get('/')
  public getPokemonPaginated(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.pokemonPaginated.execute(limit, offset);
  }
}
