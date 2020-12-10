## :rocket: Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  [Node.js](https://nodejs.org)
-  [TypeScript](https://www.typescriptlang.org)
-  [Express](https://expressjs.com/pt-br/)
-  [jsonwebtoken](https://jwt.io)
-  [Knex](http://knexjs.org)
-  [mysql](https://www.npmjs.com/package/mysql)
-  [Cors](https://www.npmjs.com/package/cors)
-  [uuidv4](https://www.npmjs.com/package/uuidv4)
-  [dotenv](https://www.npmjs.com/package/dotenv)
 
## :information_source: Como usar

Para clonar e rodar a aplicação, vai ser necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org) instalados no seu computador. 



Para isso é necessário utilizar algum programa para realizar as requisições como: [Insomnia](insomnia.rest) ou [Postman](https://www.postman.com).

Todas as requisições são feitas a partir dessa url: `localhost:3333`.

Observação: Todas as requisições utilizadas a `/v1` irá ter verificação de hash, para isso será necessário adicionar no `Headers` o campo `authorization` com o hash gerado.

### User

#### [POST] Create User
URL: `/user`

Request Body:
```JSON
{
	"email": "jose.alberto@gmail.com",
	"name": "jose",
	"password": "jose1234"
}
```

Response Body: `201 Created`
```JSON
{
  "result": {
    "hash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiam9zZS5hbGJlcnRvQGdtYWlsLmNvbSIsIm5hbWUiOiJqb3NlIiwicGFzc3dvcmQiOiJqb3NlMTIzNCJ9LCJpYXQiOjE2MDc1NzQ4NTcsImV4cCI6MTYwNzYwMzY1N30.N6PDHRtQfmtcMXbGaTthQhuAkRmDvF80Hr7FwGIgD-k"
  }
}
```

#### [POST] Login User
URL: `/login`

Request Body:
```JSON
{
	"email": "jose.alberto@gmail.com",
	"password": "jose1234"
}
```

Response Body: `200 OK`
```JSON
{
  "result": {
    "hash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiam9zZS5hbGJlcnRvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiam9zZTEyMzQiLCJuYW1lIjoiam9zZSJ9LCJpYXQiOjE2MDc1NzUwMzksImV4cCI6MTYwNzYwMzgzOX0.KNDrApIsMKchavVb7TVDjR7Z9VljXBU9U6GBdGCgksM"
  }
}
```

#### [GET] Logoff User
URL: `/v1/logoff`

Response: `200 OK`

### Movie

#### [POST] Create Movie
URL: `/v1/movie`

Request Body:
```JSON
{
	"title": "Velozes e furiosos",
	"director": "Vin Diesel"
}
```

Response: `201 Created`

#### [GET] Read Movie
URL: `/v1/movie`

Para buscar por `title`, é só adicionar o campo como uma `Query` na requisição. Exemplo: `/v1/movie?title=Velozes`

Obs.: Caso busque sem o filtro, será buscado somente os filmes disponíveis. Se utilizar o filtro, trazes todos os filmes com o titulo semelhante.

Response Body: `200 OK`
```JSON
{
  "result": {
    "0": {
      "id": "2f427ac0-fd63-4f80-8071-3c6b812dd782",
      "title": "Velozes e furiosos",
      "director": "Vin Diesel",
      "status": "available"
    },
    "1": {
      "id": "ab68d941-d22a-4290-8205-98fa83bc35d5",
      "title": "Vingadores: Ultimato",
      "director": "Joe Russo",
      "status": "available"
    },
    "2": {
      "id": "b33a3a3a-6d71-4c0e-81c0-6f743278a4cf",
      "title": "Click",
      "director": "Frank Coraci",
      "status": "available"
    }
  }
}
```

#### [PATCH] Update Movie
URL: `/v1/movie`

Para alterar é preciso por o `id` do filme, é só adicionar o campo como uma `Query` na requisição. Exemplo: `/v1/movie?id=2f427ac0-fd63-4f80-8071-3c6b812dd782`


Request Body: 
```JSON
{
	"title": "Velozes e furiosos 5: Operação Rio"
}
```

Response: `200 OK`

#### [PATCH] Delete Movie
URL: `/v1/movie`

Para deletar é preciso por o `id` do filme, é só adicionar o campo como uma `Query` na requisição. Exemplo: `/v1/movie?id=2f427ac0-fd63-4f80-8071-3c6b812dd782`


Response: `200 OK`

### Rental

#### [POST] Create Rental
URL: `/v1/rental`

Request Body:
```JSON
{
	"idMovie": "2f427ac0-fd63-4f80-8071-3c6b812dd782",
	"emailUser": "jose.alberto@gmail.com",
	"dateStart": "2020-12-08",
	"dateEnd": "2020-12-10"
}
```

Response Body: `201 Created`
```JSON
{
  "result": {
    "hash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiam9zZS5hbGJlcnRvQGdtYWlsLmNvbSIsIm5hbWUiOiJqb3NlIiwicGFzc3dvcmQiOiJqb3NlMTIzNCJ9LCJpYXQiOjE2MDc1NzQ4NTcsImV4cCI6MTYwNzYwMzY1N30.N6PDHRtQfmtcMXbGaTthQhuAkRmDvF80Hr7FwGIgD-k"
  }
}
```

#### [GET] Read Rental
URL: `/v1/rental`

Nessa busca temos 3 tipos de filtros, por `id`, `idMovie` e `emailUser`.
Para utilizar é só adicionar o campo como uma `Query` na requisição. Exemplo: `/v1/rental?emailUser=jose.alberto%40gmail.com`

Response Body: `200 OK`
```JSON
{
  "result": {
    "0": {
      "id": "131ecd6a-6098-42e0-9206-45db36eb76dc",
      "idMovie": "b33a3a3a-6d71-4c0e-81c0-6f743278a4cf",
      "titleMovie": "Click",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    },
    "1": {
      "id": "40afc85e-b444-41e8-9009-3f69c5eee0ac",
      "idMovie": "2f427ac0-fd63-4f80-8071-3c6b812dd782",
      "titleMovie": "Velozes e furiosos",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    },
    "2": {
      "id": "99ba049e-0126-4d7c-89ca-8b462a9730dc",
      "idMovie": "ab68d941-d22a-4290-8205-98fa83bc35d5",
      "titleMovie": "Vingadores: Ultimato",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    }
  }
}
```

#### [PATCH] Devolution Rental
URL: `/v1/rental`

Para devolver o filme é necessário inserir o `id` de `rental`, para utilizar é só adicionar o campo como uma `Query` na requisição. 
Exemplo: `/v1/rental?id=40afc85e-b444-41e8-9009-3f69c5eee0ac`

Response Body: `200 OK`
```JSON
{
  "result": {
    "0": {
      "id": "131ecd6a-6098-42e0-9206-45db36eb76dc",
      "idMovie": "b33a3a3a-6d71-4c0e-81c0-6f743278a4cf",
      "titleMovie": "Click",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    },
    "1": {
      "id": "40afc85e-b444-41e8-9009-3f69c5eee0ac",
      "idMovie": "2f427ac0-fd63-4f80-8071-3c6b812dd782",
      "titleMovie": "Velozes e furiosos",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    },
    "2": {
      "id": "99ba049e-0126-4d7c-89ca-8b462a9730dc",
      "idMovie": "ab68d941-d22a-4290-8205-98fa83bc35d5",
      "titleMovie": "Vingadores: Ultimato",
      "emailUser": "jose.alberto@gmail.com",
      "nameUser": "jose",
      "status": "rented",
      "dateStart": "2020-12-18T03:00:00.000Z",
      "dateEnd": "2020-12-22T03:00:00.000Z"
    }
  }
}
```

## Banco de dados

Foi utilizado para essa aplicação o MySql e um sistema de migrations do [Knex](http://knexjs.org), é necessário configurar o arquivo `.env` com as seguintes infos:

```env
SECRET_STRING=secretstring

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_BASE=db_locadora
```

Basicamente será necessário uma base para poder fazer a criação das tabelas.

Usar as seguintes linhas de comando:

```bash
# Clonar o repositório
$ git clone https://github.com/vinifinger/API_LOCADORA.git

# Entre no repositório
$ cd API_LOCADORA

# Instale as dependencias
$ npm install

# Criar tabelas do banco e inserts iniciais
$ npm run knex:migrate

# Rodar a API
$ npm start
```

## :memo: Licença
Este projeto está sob a licença do MIT.
---

Desenvolvido com ♥ por Vinicius M. Finger :wave: [Linkedin](https://www.linkedin.com/in/vinicius-finger/)