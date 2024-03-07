## Painel

![Painel](https://cdn.discordapp.com/attachments/1083115321935798314/1172250664961851514/painel.png?ex=65fc8501&is=65ea1001&hm=bc4423308fc92dfa87323c39cc3802edd5a96e12dd8461429558796bf00ccb86&)

## Cadastro

![Cadastro](https://cdn.discordapp.com/attachments/1083115321935798314/1172256551260659804/cadastro.png?ex=65f34ffd&is=65e0dafd&hm=3ac88024f2636ae49c3d0a94da2c750ec5e15519e07ad801641fde61f8414c8c&)

## Modal

![Modal](https://cdn.discordapp.com/attachments/1083115321935798314/1172263310717091881/image.png?ex=65f35648&is=65e0e148&hm=990986fd218bf93a06a78179c322ec5e8015b9eee2ba0db2a9ce2fe9212bf4c3&)

## Validação

![Form](https://cdn.discordapp.com/attachments/1083115321935798314/1172476952175706113/modal-validate.png?ex=65f41d40&is=65e1a840&hm=a1b6a129383b0cead25363cb282cb0fcecb05e8da7d0e903380103a31f4eb434&)

## Mobile

![Mobile](https://cdn.discordapp.com/attachments/1083115321935798314/1172271386786545695/painel-phone.png?ex=65f35dce&is=65e0e8ce&hm=ed61e4de924b6f654d38d20863d19062c587003e338d2fc02ed342629769b96d&)

## Cypress - test e2e

![test](https://cdn.discordapp.com/attachments/1083115321935798314/1185256949596565554/image.png?ex=658ef38d&is=657c7e8d&hm=dccc17f571e6ba586475d9d13e47939e38ca1696b8cfb64b6b9a089b5f627e5b&)

## Description

Frontend projeto: Lista Defensoria do Estado do Rio Grande do Sul
- Front: React.js v.18
- Framework: Next.js v.14
- UI: radix-ui
- Icons: lucide-react
- CSS: tailwind - Responsible (Mobile)
- Validation: useForm e zod
- Gerenciamento de estado: zustand
- Test-unitario: Jest 
- Test e2e: Cypress
- Mock: Json-server
- Docker e docker-compose

Obs: - Tratamentos de erros da api: handleApiErrors (400, 404, 500)
     - Camada de Service separado por ServiceGateway e interfaces:
        - getAll, create, getById, updateById, deleteById
     - hooks personalizados
        - useDebounce e modal
     - Contants e Componentes separadas e organizadas;   

## Defensoria do Estado do Rio Grande do Sul
 - CRUD: Modal e Form inputs use radix-ui 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# exec json-server
$ npm run mock

# dev
$ npm run dev

# test
$ npm test

# se desejar usar uma imagem docker: 
# docker-compose permissao
$ npm sudo chmod +x .docker/entrypoint.sh

# docker-compose up
$ sudo docker-compose up

```

## Example production on Vercel

- Link: [https://next14-defense.vercel.app/](https://next14-defense.vercel.app/)
