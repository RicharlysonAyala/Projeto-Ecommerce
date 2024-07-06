// Produtos
const produtos = document.querySelectorAll(".produto");
const allProdutos = document.querySelector("#produtos")


// Seleção de elementos
const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body");
const fechar = document.querySelector('#fechar')
const corPreta = document.querySelector("#cor-preta")

const barraDePesquisa = document.querySelector("#pesquisa")
const lupa = document.querySelector("#lupa")

let valueInput;

const iconeCoracaoVazio = document.querySelectorAll(".coracao-desejo")

const listaDesejos = document.querySelector("#favoritos");
const coracaoDesejo = document.querySelector("#coracao-lista-desejo");
const paragrafo = document.querySelector("#paragrafo");

const especificos = document.querySelectorAll(".especifico");


// Evento de abrir a barra
iconeCarrinho.addEventListener('click', () => {
    listCar.classList.remove("fechar")
    listCar.classList.add("abrir")
    body.style.overflow = "hidden"
    listCar.style.display = "flex"
});

// Evento de fechar a barra
fechar.addEventListener('click', () => {
    listCar.classList.remove("abrir")
    listCar.classList.add("fechar")
    body.style.overflow = "scroll"
    setTimeout(() => {
        listCar.style.display = "none"
    }, 459);
});


// Procurar produtos
const procurarProdutos = (search) => {
    produtos.forEach((produto) => {
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


// Funcionalidade do coração
const trocaCoracao = (value) => {
    value.classList.toggle("fa-regular");
    value.classList.toggle("fa-solid");
};

iconeCoracaoVazio.forEach((coracaoVazio) => {
    coracaoVazio.addEventListener("click", (e) => {
        trocaCoracao(e.target)
    });
});


// Lista de desejo
listaDesejos.addEventListener("click", () => {
    trocaCoracao(coracaoDesejo);

    paragrafo.innerText = 'Exibindo muita "criatividade"'

    if (coracaoDesejo.classList.contains("fa-solid")) {
        let cont = 0;
        produtos.forEach((produto) => {
            divCoracao = produto.querySelector(".agrupamento-favoritos");
            coracaoTarget = divCoracao.querySelector("i")
            
            if (!coracaoTarget.classList.contains("fa-solid")) {
                produto.style.display = "none"
                cont += 1
            }

            if (cont === 9) {
                paragrafo.innerText = "Nenhum Produto encontrado!!"
            };
        });
    } else {
        produtos.forEach((produto) => {
            produto.style.display = "inline"
        });
    };
});


// Lado esquerdo
especificos.forEach((especifico) => {
    especifico.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "caro":
                console.log("a");
                allProdutos.innerHTML = "";
                return
            case "barato":
                console.log("b");
                allProdutos.innerHTML = "";
                return;
            case "pilulas":
                console.log("c");
                allProdutos.innerHTML = "";
                produtos.forEach((produto) => {
                    console.log(produto)
                    if (produto.classList.contains("pilulas")) {
                        allProdutos.appendChild(produto);
                    };
                });
                return;
            case "kits":
                console.log("d");
                allProdutos.innerHTML = "";
                produtos.forEach((produto) => {
                    console.log(produto)
                    if (produto.classList.contains("kits")) {
                        allProdutos.appendChild(produto);
                    };
                });
                return;
            case "padrao":
                console.log("e");
                allProdutos.innerHTML = "";
                produtos.forEach((produto) => {
                    allProdutos.appendChild(produto);
                });
                return;
            default:
                console.log("Clicou fora");
                return;
        }
    });
});