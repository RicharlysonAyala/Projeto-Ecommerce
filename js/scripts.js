const form = document.querySelector('#form');
const nomeInput = document.getElementsByClassName('entrada-de-nome');
const senhaInput = document.getElementsByClassName('entrada-de-senha');
const nomeLogin = document.getElementsByClassName('entrada-do-nome-login');
const senhaLogin = document.getElementsByClassName('entrada-da-senha-login');

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
const nomeLoginValue = nomeLogin.value;
const senhaLoginvalue = senhaLogin.value;

logins = [
    {
        nome: "Valter",
        senha: "123"
    }
]

// Add um evento para o form | validação de formulário
form.addEventListener('submit', (e) => {

    // Para que a pgn não fique atualizando ao clicar
    e.preventDefault

    class Login {
        constructor(nome,senha) {
            this.nome;
            this.senha
        }
    }

    const usuarios = [
        {
            nome: "Valter",
            senha: 123
        }
    ]

    if(nomeValue.lenght > 0 && senhaValue.lenght > 0){
       usuarios.push(new Login(nomeValue, senhaValue))
    } else{
        alert('Preencha os campos de cadastro')
    }
    if(nomeLogin.length > 0 && senhaLogin.length > 0) {
       openInNewTab
    } else {
        alert('Preencha os campos de login')
    }
})

