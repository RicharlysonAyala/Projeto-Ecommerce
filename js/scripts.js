const formLogin = document.querySelector('#form-login');
const formCadastro = document.querySelector('#form-cadastro');
const nomeInput = document.querySelectory('.entrada-do-nome-cadastro');
const senhaInput = document.querySelectory('.entrada-da-senha-cadastro');
const nomeLogin = document.querySelectory('.entrada-do-nome-login');
const senhaLogin = document.querySelectory('.entrada-da-senha-login');

const url = '../index.html'
const btnCadastro = document.querySelector('#cadastro-btn');
const btnLogin = document.querySelector('#login-btn');

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

const logins = [
    {
        nome: "Valter",
        senha: "123"
    }
]

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
    if(usuarios.map((usuarios => {
        nomeLogin == usuarios[0] && senhaLogin == usuarios[1];
    }))) {
       openInNewTab()
    } else {
        alert('Preencha os campos de login')
    }
})

