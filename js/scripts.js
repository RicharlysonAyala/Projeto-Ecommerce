// Seleção
const form = document.querySelector('#login');
const nomeLogin = document.querySelector('.entrada-do-nome-login');
const senhaLogin = document.querySelector('.entrada-da-senha-login');

const url = '../index.html';
const btnLogin = document.querySelector('#login-btn');


// Função btn | add um evento para o btn
function openInNewTab(url){
    const win = window.open(url, '_blank');
    win.focus;
}


// Pegando os valores do input
let nomeLoginValue = nomeLogin.value;
let senhaLoginValue = senhaLogin.value;

nomeLogin.addEventListener("input", () => {
    nomeLoginValue = nomeLogin.value;
});

senhaLogin.addEventListener("input", () => {
    senhaLoginValue = senhaLogin.value;
});


// Mensagens exibidas
const erro = document.createElement("p");
erro.classList.add("erro");
form.appendChild(erro);

const acerto = document.createElement("p");
acerto.classList.add("acerto");
form.appendChild(acerto);


// Lógica do login
const logins = [
    {
        nome: "ValterLindo",
        senha: "euamocss"
    }
];

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    if (nomeLoginValue === "" || senhaLoginValue === "") {
        erro.innerText = "Preencha os campos para continuar"
        console.log(nomeLoginValue, senhaLoginValue);
        setTimeout(() => {
            erro.innerText = "";
        }, 2000);
    } else if (nomeLoginValue === logins[0].nome && senhaLoginValue === logins[0].senha) {
        acerto.innerText = "Login efetuado... Enviando para o site!!"
        setTimeout(() => {
            acerto.innerText = "";
            openInNewTab(url);
        }, 2000);
    } else {
        erro.innerText = "Nome ou senha de usuário incorreta!!"
        console.log(nomeLoginValue, senhaLoginValue);
        setTimeout(() => {
            erro.innerText = "";
        }, 2000);
    }
});