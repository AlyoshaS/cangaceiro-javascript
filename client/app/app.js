// Cria a instância do controller
let controller = new NegociacaoController();

document
  .querySelector('.form')
  .addEventListener('submit', function(event){
    controller.adiciona(event);
  });
