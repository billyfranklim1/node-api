# API Auth

Before running with docker, change .env to HOSTMONGO=mongo:${MONGO_INTERNAL_PORT}/
```
sudo docker-compose --env-file ./.env up -d 
```
To run the tests with docker, run the command:
```
docker-compose -f docker-compose.test.yml up
```

# Estrutura da API
```
├── bin
│   └── server.js
├── config
│   └── index.js
├── docker-compose.test.yml
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── nodemon.json
├── package.json
├── README.md
├── src
│   ├── database
│   │   └── index.js
│   ├── index.js
│   ├── middlewares
│   │   └── error-handling.js
│   ├── model
│   │   └── index.js
│   ├── routes
│   │   ├── index.js
│   │   └── repository
│   │       ├── create.js
│   │       ├── index.js
│   │       ├── like.js
│   │       ├── list.js
│   │       ├── remove.js
│   │       └── update.js
│   ├── __tests__
│   │   ├── app.spec.js
│   │   └── repository
│   │       ├── create.spec.js
│   │       ├── like.spec.js
│   │       ├── list.spec.js
│   │       ├── remove.spec.js
│   │       └── update.spec.js
│   └── utils
│       ├── swagger.example.json
│       └── swagger.json
└── yarn.lock
```
# Test with the Swagger

```
https://localhost:3333/api-docs
```
