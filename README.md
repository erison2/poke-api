# PokeAPI

Bem-vindo à PokeAPI, uma API para acesso a dados sobre Pokémon.

## Descrição

A PokeAPI é uma API RESTful que fornece uma variedade de informações sobre Pokémon, incluindo detalhes sobre diferentes espécies, habilidades, tipos, estatísticas e muito mais.

## Documentação

A documentação da API está disponível em [https://pokeapi.co/docs/](https://pokeapi.co/docs/), onde você pode encontrar informações detalhadas sobre os endpoints disponíveis, os parâmetros de entrada e as respostas retornadas.

## Endpoints Principais

- **GET /pokemon/color/{color}**: Retorna uma lista de Pokémon de uma determinada cor. 
- **GET /pokemon**: Retorna uma lista paginada de Pokémons. Aceita parâmetros `limit` e `offset` para controle de quantidade e índice.
- **GET /pokemon/{name}**: Retorna os detalhes de um Pokémon específico com base no seu nome.

## Tecnologias Utilizadas

- Node.js
- Nest.js
- Swagger

## Instalação

1. Clone este repositório.
2. Inicie o servidor com o comando `docker-compose up -d --build`.

## Acesso ao Swagger

Para explorar a API utilizando o Swagger, acesse [http://localhost:3000/api](http://localhost:3000/api).

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar bugs, sugerir novos recursos ou enviar pull requests.

## Autor

Erison Quintela de Freitas

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
