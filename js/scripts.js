<<<<<<< HEAD
const form = document.querySelector('#form');
const nomeInput = document.getElementsByClassName('.entrada-de-nome');
const senhaInput = document.getElementsByClassName('.entrada-de-senha');
const nomeLogin = document.getElementsByClassName('.entrada-do-nome-login');
const senhaLogin = document.getElementsByClassName('.entrada-da-senha-login');

const url = '../index.html'
const btnCadastro = document.getElementById('btn');
const
=======
const formLogin = document.querySelector('#form-login');
const formCadastro = document.querySelector('#form-cadastro');
const nomeInput = document.querySelectory('.entrada-do-nome-cadastro');
const senhaInput = document.querySelectory('.entrada-da-senha-cadastro');
const nomeLogin = document.querySelectory('.entrada-do-nome-login');
const senhaLogin = document.querySelectory('.entrada-da-senha-login');

const url = '../index.html'
const btnCadastro = document.querySelector('#cadastro-btn');
const btnLogin = document.querySelector('#login-btn');
>>>>>>> 889854faed99112abd19eb1969c4862565174c3e

// Função btn | add um evento para o btn
function openInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus
}

// Pegando os valores do input
const nomeValue = nomeInput.value;
const senhaValue = senhaInput.value;
const nomeLoginValue = nomeLogin.value;
const senhaLoginvalue = senhaLogin.value;

<<<<<<< HEAD
=======
const logins = [
    {
        nome: "Valter",
        senha: "123"
    }
]

>>>>>>> 889854faed99112abd19eb1969c4862565174c3e
// Add um evento para o form | validação de formulário
formLogin.addEventListener('submit', (e) => {

    // Para que a pgn não fique atualizando ao clicar
    e.preventDefault()

    class Login {
        constructor(nome,senha) {
            this.nome = nome;
            this.senha = senha;
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
<<<<<<< HEAD
    if(nomeLogin.length > 0 && senhaLogin.length > 0) {
=======
    if(usuarios.map((usuarios => {
        nomeLogin == usuarios[0] && senhaLogin == usuarios[1];
    }))) {
>>>>>>> 889854faed99112abd19eb1969c4862565174c3e
       openInNewTab()
    } else {
        alert('Preencha os campos de login')
    }
})

