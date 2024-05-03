import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './infrastructure/httpExceptionFilter.exception';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins
  app.enableCors();

  // Use global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos não definidos no DTO
      transform: true, // Converte parâmetros de rota para o tipo correto
      forbidNonWhitelisted: true, // Lança uma exceção se campos não definidos forem encontrados
      transformOptions: {
        enableImplicitConversion: true, // Habilita a conversão implícita de tipos
      },
      exceptionFactory: (errors) => {
        const formattedErrors = errors.map((error) => ({
          field: error.property,
          message: Object.values(error.constraints).join(', '),
        }));

        return {
          statusCode: 400,
          message: 'Erro de validação',
          errors: formattedErrors,
        };
      },
    }),
  );

  // Exception Handling
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('PokeApi')
    .setDescription('API para acesso a dados dos Pokémons.')
    .setVersion('1.0')
    .addTag('PokeDéx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
