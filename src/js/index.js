/*

OBJETIVO 1 - Quando clicar no botao de avançar deve ser mostrado o proximo cartão da lista.

-Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar.
-Passo 2 - Dar um jeito de identificar o clique do usuario na seta Avançar.
-Passo 3 - Fazer aparecer o Proximo cartão da Lista.
-Passo 4 - buscar o Cartão Selecionado e Esconder.

OBJETIVO 2 - Quando clicar no botão de voltar deve ser mostrado o cartao anterior.

-Passo 1 - Dar um jeito de pegar o elemento HTML da seta Voltar.
-Passo 2 - Dar um jeito de identificar o clique do usuario na seta Voltar.
-Passo 3 - Fazer aparecer o Cartão Anterior da Lista.
-Passo 4 - buscar o Cartão Selecionado e Esconder.
*/







/*

OBJETIVO 1 - Quando clicar no botao de avançar deve ser mostrado o proximo cartão da lista.

-Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar.
-Passo 2 - Dar um jeito de identificar o clique do usuario na seta Avançar.
-Passo 3 - Fazer aparecer o Proximo cartão da Lista.
-Passo 4 - buscar o Cartão Selecionado e Esconder.
*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao () {
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){
    
    if (cartaoAtual === cartoes.length -1) return;    
    
    esconderCartaoSelecionado();

    cartaoAtual++;
        mostrarCartao();

})


/*OBJETIVO 2 - Quando clicar no botão de voltar deve ser mostrado o cartao anterior.

-Passo 1 - Dar um jeito de pegar o elemento HTML da seta Voltar.
-Passo 2 - Dar um jeito de identificar o clique do usuario na seta Voltar.
-Passo 3 - Fazer aparecer o Cartão Anterior da Lista.
-Passo 4 - buscar o Cartão Selecionado e Esconder.
*/

btnVoltar.addEventListener('click', function (){
    if(cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
})


/*function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');


    function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
        cartaoSelecionado.classList.remove('selecionado');
}
} */