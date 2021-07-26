# Rick and Morty Character Search

Aplicação de busca por nome de personagem da série Rick & Morty

## Vue 3 + Vite + Apollo + Typescript

O projeto foi iniciado com Vite, foi utilizado Vue 3 com o componente de classes para deixar o código um pouco mais legível. Para lidar com a API em `Graphql` foi instalado o [Apollo](https://www.apollographql.com/docs/react/get-started/). `Typescript` foi usado para ajudar com as tipagens e facilitar o desenvolvimento como um todo.

## Como rodar o projeto

Recomenda-se que seja utilizado o `yarn` para execução local do projeto

Basta fazer o clone, navegar até a pasta contendo os arquivos e depois:

`yarn`

Assim que terminar o download dos componentes podemos executar:

`yarn dev`

Se tudo correr bem, acessando localhost:3000 em qualquer navegador deve nos trazer a página inicial do projeto

## Em produção

Utilizei a plataforma [Vercel](https://vercel.com/gabrielkgg) para hospedar essa aplicação, acessível através do link: https://rickandmorty-brown.vercel.app/

Bastando apenas linkar o repository do Github e pronto, cada merge que ocorre na branch master já atualiza automaticamente em produção.

## Notas do desenvolvedor

- Estou levemente arrependido de não ter usado router do Vue. Entendo que facilitaria a usabilidade e talvez algumas funcionalidades ficariam mais simples.
- Esta foi minha primeira vez lidando com Graphql, pesquisando a melhor maneira acabei gostando do Apollo que facilitava um pouco as coisas. Único problema é que ele instala o pacote React mesmo num projecto Vue 3. Por não encontrar outra maneira tão simples como gostaria, segui com esta ideia.
- Não foram implementados nenhum tipo de teste, tanto de front quanto pela parte da API.
- Planejo utilizar este repository para aprimorar e testar coisas novas, como por exemplo nos itens acima, testes unitários e implementação de router
- Ah, sim... um projeto baseado em Rick & Morty não poderia faltar: existem alguns easter eggs (não estou falando dos bugs).
