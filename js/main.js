// Produtos
const produtos2 = document.querySelectorAll(".produto");


// Seleção de elementos
const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body");
const fechar = document.querySelector('#fechar')
const corPreta = document.querySelector("#cor-preta")

const barraDePesquisa = document.querySelector("#pesquisa")
const lupa = document.querySelector("#lupa")

let valueInput;

console.log(lupa)


// Evento de abrir a barra
iconeCarrinho.addEventListener('click', () => {
    listCar.classList.remove("fechar")
    listCar.classList.add("abrir")
    body.style.overflow = "hidden"
    listCar.style.display = "flex"
})

// Evento de fechar a barra
fechar.addEventListener('click', () => {
    listCar.classList.remove("abrir")
    listCar.classList.add("fechar")
    body.style.overflow = "scroll"
    setTimeout(() => {
        listCar.style.display = "none"
    }, 459);
})


// Procurar produtos
const procurarProdutos = (search) => {
    produtos2.forEach((produto) => {
        const nomeProduto = produto.querySelector("h3").innerText.toLowerCase();

        const nomePesquisa = search.toLowerCase();

        produto.style.display = "inline"

        if (!nomeProduto.includes(nomePesquisa)) {
            produto.style.display = "none"
        }
    });
};

barraDePesquisa.addEventListener("keyup", (e) => {
    const search = e.target.value;

    valueInput = e.target.value;

    procurarProdutos(search);

});

lupa.addEventListener("click", () => {
    if (valueInput === undefined) {
        return;
    };
    
    procurarProdutos(valueInput);
});