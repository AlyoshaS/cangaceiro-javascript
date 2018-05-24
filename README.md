# Cangaceiro Javascript

### Visão geral da jornada

O projeto deste livro será um cadastro de negociações de bolsa de valores. Ele será construído através do paradigma funcional e orientado a objetos ao mesmo tempo, utilizando o melhor dos dois mundos.  

Em um primeiro momento, o escopo da nossa aplicação pode parecer bem reduzido, mas é o suficiente para lançarmos mão de uma série de recursos acumulados na linguagem até a sua versão ECMAScript 2017 (ES8).  

Para que o leitor prepare suas expectativas sobre o que está por vir, segue um breve resumo de cada capítulo:  

**Capítulo 01:** escreveremos um código rapidamente sem nos preocuparmos com boas práticas ou sua reutilização, sentindo na pele as consequências dessa abordagem. É a partir dele que toda a trama do livro dará início, inclusive a motivação para uma estrutura aplicando o modelo MVC.  

**Capítulo 02:** materializar uma representação de algo do mundo real em código é uma das tarefas do desenvolvedor. Veremos como o paradigma orientado a objetos pode nos ajudar na construção de um modelo.  

**Capítulo 03:** do que adianta um modelo se o usuário não pode interagir com ele? Criaremos um controller, a ponte entre as ações do usuário e o modelo.  

**Capítulo 04:** lidar com data não é uma tarefa trivial em qualquer linguagem, mas se combinarmos recursos da própria linguagem JavaScript pode ser algo bem divertido.  

**Capítulo 05:** não é apenas uma negociação que possui regras, uma lista de negociação também. Criaremos mais um modelo com suas respectivas regras.  

**Capítulo 06:** do que adianta termos um modelo que é modificado pelo usuário se ele não consegue ver o resultado? Aprenderemos a ligar o modelo com a view.  

**Capítulo 07:** criar um modelo, modificá-lo com as ações do usuário e apresentá-lo é uma tarefa corriqueira. Será que podemos isolar esse processo e reutilizá-lo? Com certeza!  

**Capítulo 08:** jogar a responsabilidade de atualizar a view no colo do desenvolvedor toda vez que o modelo mudar está sujeito a erros. Aprenderemos a automatizar esse processo.  

**Capítulo 09:** aplicaremos o padrão de projeto Proxy para implementarmos nossa própria solução de data binding, que consiste na atualização da view toda vez que o modelo sofrer alterações.  

**Capítulo 10:** isolaremos a responsabilidade da criação de proxies em uma classe, aplicando o padrão de projeto Factory e permitindo que ela seja reutilizada pela nossa aplicação.  

**Capítulo 11:** aprenderemos a lidar com exceções, inclusive a criá-las.  

**Capítulo 12:** trabalharemos com o velho conhecido XMLHttpRequest para nos integrarmos com a API fornecida com o projeto.  

**Capítulo 13:** combateremos o callback hell, resultado da programação assíncrona com callbacks através do padrão de projeto Promise. Isolaremos a complexidade de se trabalhar com o XMLHttpRequest em classes de serviços.  

**Capítulo 14:** negociações cadastradas são perdidas toda vez que a página é recarregada ou quando o navegador é fechado. Utilizaremos o IndexedDB, um banco presente em todo navegador para persistir nossas negociações.  

**Capítulo 15:** não basta termos uma conexão com o IndexedDB. Aplicaremos um conjunto de boas práticas para lidar com a conexão, facilitando assim a manutenção e legibilidade do código.  

**Capítulo 16:** aplicaremos o padrão de projeto DAO para esconder do desenvolvedor os detalhes de acesso ao banco e tornar ainda mais legível o código escrito.  

**Capítulo 17:** o tendão de Aquiles da linguagem JavaScript sempre foi o escopo global e as dependências entre scripts, jogando a responsabilidade da ordem de carregamento no colo do desenvolvedor. Aprenderemos a usar o sistema de módulos padrão do próprio JavaScript para atacar esses problemas. Durante esse processo, aprenderemos a lidar com Babel, o transcompilador mais famoso do mundo open source.  

**Capítulo 18:** veremos como o uso de promises com async/wait torna nosso código assíncrono mais fácil de ler e de manter. Aplicaremos mais padrões de projetos.  

**Capítulo 19:** aplicaremos o padrão de projeto Decorator com auxílio do Babel, inclusive aprenderemos a realizar requisições assíncronas através da API Fetch, simplificando ainda mais nosso código. Nos aprofundaremos na metaprogramação com reflectmetadata.  

**Capítulo 20:** utilizaremos Webpack para agrupar nossos módulos e aplicar boas práticas em tempo de desenvolvimento e de produção. Inclusive aprenderemos a fazer o deploy da aplicação no GitHub Pages.  

Por fim, você poderá acompanhar o autor pelo twitter [@flaviohalmeida](https://twitter.com/flaviohalmeida) e pelo [blog](http://cangaceirojavascript.com.br). Para adquirir o livro, confira o site da [Casa do Código](https://www.casadocodigo.com.br/pages/sumario-cangaceiro-javascript).