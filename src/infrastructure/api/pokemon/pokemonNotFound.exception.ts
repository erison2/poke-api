import { HttpException, HttpStatus } from '@nestjs/common';

export class PokemonNotFoundException extends HttpException {
  constructor() {
    super('Pokemon não encontrado', HttpStatus.NOT_FOUND);
  }
}
