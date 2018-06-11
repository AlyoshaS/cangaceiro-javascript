// Cria a instância do controller
let controller = new NegociacaoController();

document
  .querySelector('.form')
  .addEventListener('submit', controller.adiciona);
