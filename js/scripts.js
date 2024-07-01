const form = document.querySelector('#form');
const nomeInput = document.getElementsByClassName('entrada-de-nome');
const senhaInput = document.getElementsByClassName('entrada-de-senha');
const url = '../index.html'
const btn = document.getElementById('btn');

// Função btn | add um evento para o btn
function openInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

// Pegando os valores do input
const nomeValue = nomeInput.value;
const senhaValue = senhaInput.value;

// Add um evento para o form | validação de formulário
form.addEventListener('submit', (e) => {

    // Para que a pgn não fique atualizando ao clicar
    e.preventDefault

    if(nomeValue == '') {
        alert('Preencha o campo com um nome de usuário');
    }
    if(senhaValue == '') {
        alert('Preencha o campo com uma senha');
    }
    else {
        openInNewTab(url);
    }
})

//add ao carrinho

const addCar = document.getElementsByClassName('add-carrinho');
for (const i = 0; i < addCar.length; i++){
    addCar[i].addEventListener('click', addProduto)
}

function addProduto(event) {
    const botao = event.target;
    const produtoInfos = botao.parentElement.parentElement;
    console.log(produtoInfos)
}
