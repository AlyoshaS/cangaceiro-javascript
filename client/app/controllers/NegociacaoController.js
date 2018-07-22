class NegociacaoController {
  adiciona(event) {
    event.preventDefault();
    //busca elementos:
    // let inputData = document.querySelector( '#data' );
    // let inputQuantidade = document.querySelector( '#quantidade' );
    // let inputValor = document.querySelector( '#valor' );

    // realizando o bind, $ mantém document como seu contexto this
    let $ = document.querySelector.bind(document);
    let inputData = $('#data');
    let inputQuantidade = $('#quantidade');
    let inputValor = $('#valor');

    console.log( inputData.value );
    console.log( parseInt(inputQuantidade.value) );
    console.log( parseFloat(inputValor.value) );
  }
}
