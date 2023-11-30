## Painel

![Painel](https://cdn.discordapp.com/attachments/1083115321935798314/1172478129172905984/painel.png?ex=65607659&is=654e0159&hm=b30b38d7d34db1303e9f4a058cf04a31f910ec5988f313fbab6bdbf36931a03d&)

## Cadastro

![Cadastro](https://cdn.discordapp.com/attachments/1083115321935798314/1172478594585481216/cadastro.png?ex=656076c8&is=654e01c8&hm=633d8ad1f2fb8b33bdb4f14dc5e4a87c53a207f018b5ed9f29d01a811d9e7d9f&)

## Modal

![Modal](https://cdn.discordapp.com/attachments/1083115321935798314/1172263310717091881/image.png?ex=655fae48&is=654d3948&hm=889229ec7cf4056c8e40fb01cd112df64367ab3aacf522b7e11d09bde661dcb8&)

## Validação

![Form](https://cdn.discordapp.com/attachments/1083115321935798314/1172476952175706113/modal-validate.png?ex=65607540&is=654e0040&hm=496de21f3497d72b86949ce39d9eadcc85336e36759a2f893658fd8798a907db&)

## Mobile

![Mobile](https://cdn.discordapp.com/attachments/1083115321935798314/1172271386786545695/painel-phone.png?ex=655fb5ce&is=654d40ce&hm=5c5eda063c7e5a0ed825024de4eb0fb015693e254cf66be28932161b22ac1173&)

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

## Production example

 - [link]: https://next14-defense.vercel.app/
