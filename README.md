# Studio Sol SSBook

Aplicação para gerenciamento de livros do usuário, mostrando sua biblioteca de livros e informações a respeito de cada livro. A aplicação foi feita com React e Typescript e o endpoint de consulta se encontra em: https://us-central1-ss-devops.cloudfunctions.net/GraphQL?explorer=true. Para acessar o link de preview, basta clicar [aqui](https://studio-sol-ssbook.vercel.app/)

## Pacote de gerenciamento - PNPM (preferência)

A escolha se deve ao fato de ser uma tecnologia mais rápida que yarn e npm, além de fazer o cache de packages duplicados.

## Como executar

Para rodar o projeto, primeiro você deve instalar os packages, ao executar no terminal o comando `pnpm install`, e logo em seguida `pnpm run dev`, para rodar o aplicativo no browser na porta 5173.

## Tecnologias usadas

As principais tecnologias utilizadas:

### React

Optei pelo uso devido a familiriadade com a biblioteca da qual tenho 5 anos de experiência.

### Typescript

É um facilitador para identificar as propriedades dos objetos e garantir a qualidade do código, reduzindo possíveis erros com a tipagem de variáveis.

### Redux Toolkit Query

Para a manutenção do estado global e fazer a requisição para a api `graphql`, o rtk query auxilia criando um estado global e um hook para usar no componente necessário. A requisição é cacheada no browser e só é feita novamente se o parâmetro passado para ela for alterado.

### Styled Components

Usado para estilização, tem uma sintaxe igual ao SCSS quanto a escrita da folha de estilo, entretanto é um CSS-IN-JS, com a vantagem de poder estender components com os mesmo estilos.

### Styled System

Optei por usar junto com o styled components para ter props customizáveis de estilo. Funciona como uma unidade mínima do componente.

## Estrutura do projeto

### ui

Onde está os "dumb" components. Não possuem muita lógica e é usado para formar components mais complexos. É onde fica os componentes base.

### components

Componentes onde tem a união de componentes menores, com lógicas de comportamento.

### pages

União dos componentes mais complexos. Forma a página da feature especificada.

### services

Aqui fica a api do rtk-query junto com a store e os tipos utilizados pela aplicação.
