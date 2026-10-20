# ARQUIVO 404 — Catálogo Investigativo

## 📁 Sobre o projeto

O ARQUIVO 404 é um projeto desenvolvido para a Avaliação Prática AP2 da disciplina de Desenvolvimento Front-End.

A ideia é criar um catálogo interativo de mistérios, acontecimentos históricos e fenômenos intrigantes. Nele, é possível pesquisar assuntos, visualizar resultados em cartões e abrir dossiês com informações e links para os artigos originais da Wikipédia.

O site tem um visual inspirado em arquivos de investigação, com fundo escuro, detalhes em vermelho e uma interface adaptada para diferentes tamanhos de tela.

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- API REST da Wikipédia
- HTML5

## 🔎 Funcionalidades

- Pesquisa de artigos da Wikipédia.
- Exibição dos resultados em cartões.
- Apresentação de imagens e descrições dos artigos.
- Priorização dos resultados que possuem imagens.
- Abertura de dossiês com informações sobre o artigo selecionado.
- Links para acessar os artigos originais da Wikipédia.
- Indicador de carregamento durante as pesquisas.
- Mensagens de erro caso ocorra algum problema nas requisições.
- Layout responsivo para diferentes tamanhos de tela.

## 🌐 API utilizada

O projeto utiliza a API pública da Wikipédia em português para buscar artigos e carregar suas imagens.

**Pesquisa de artigos:**

https://pt.wikipedia.org/w/rest.php/v1/search/page

**Imagens dos artigos:**

https://pt.wikipedia.org/w/api.php

As requisições são feitas com `fetch` e `async/await`.

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── ItemCard.jsx
│   ├── ItemList.jsx
│   ├── SearchForm.jsx
│   ├── ItemDetails.jsx
│   └── LoadingSpinner.jsx
├── hooks/
│   └── useFetch.js
├── services/
│   └── api.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## ⚛️ Conceitos de React utilizados

- **Componentização:** divisão da interface em componentes separados.
- **Props:** passagem de informações e funções entre componentes.
- **useState:** gerenciamento dos estados da aplicação.
- **useEffect:** execução das buscas quando o termo pesquisado muda.
- **Custom Hook:** uso do `useFetch` para organizar a lógica de busca, carregamento e erros.
- **Formulário controlado:** campo de pesquisa conectado ao estado do React.
- **Renderização condicional:** exibição de carregamento, resultados e mensagens de erro conforme a situação.
- **Tailwind CSS:** estilização da interface com classes utilitárias e recursos responsivos.

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalação

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### Executar o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite, normalmente:

http://localhost:5173/

### Verificar o código

Para executar a verificação com ESLint, utilize:

```bash
npm run lint
```

## 👨‍💻 Autor

Gabriel da Silva Ramos