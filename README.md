# A3 dos Melhores (LinkBaby)
O projeto consiste em um backend em Go e um frontend em React. O banco de dados utilizado é o SQLite, e a comunicação entre o backend e o frontend é feita através de requisições HTTP.

### Rodar projeto com Docker (recomendado)
Para facilitar a execução do projeto, foi criado um arquivo `docker-compose.yml` que contém as configurações necessárias para rodar o projeto. Para rodar o projeto, basta executar o comando `docker compose up -d` na raiz do projeto.

O backend estará disponível em `http://localhost:8080` e o frontend em `http://localhost:3000`.

### Rodar sem Docker
Para rodar o projeto sem Docker, é necessário ter o Go e o Node.js instalados na máquina. Além disso, é necessário instalar as dependências do frontend e do backend.

#### Backend
Para rodar o backend, basta executar o comando `go build` na raiz do projeto. Em seguida executar o aquivo `linkbaby` gerado na pasta backend.

#### Frontend
Para rodar o frontend, basta executar o comando `npm install` ou `yarn` na pasta frontend e em seguida executar o comando `npm dev` ou `yarn dev`.

###### Feito na força do ódio e com muito ☕️
