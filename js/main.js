// Produtos
const produtos = document.querySelectorAll(".produto");
const allProdutos = document.querySelector("#produtos");


// Seleção de elementos
const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body");
const fechar = document.querySelector('#fechar');
const corPreta = document.querySelector("#cor-preta");

const barraDePesquisa = document.querySelector("#pesquisa");
const lupa = document.querySelector("#lupa");

let valueInput;

const iconeCoracaoVazio = document.querySelectorAll(".coracao-desejo");

const listaDesejos = document.querySelector("#favoritos");
const coracaoDesejo = document.querySelector("#coracao-lista-desejo");
const paragrafo = document.querySelector("#paragrafo");

const especificos = document.querySelectorAll(".especifico");


// Evento de abrir a barra
iconeCarrinho.addEventListener('click', () => {
    listCar.classList.remove("fechar")
    listCar.classList.add("abrir")
    listCar.style.display = "flex"
});

// Evento de fechar a barra
fechar.addEventListener('click', () => {
    listCar.classList.remove("abrir")
    listCar.classList.add("fechar")
    setTimeout(() => {
        listCar.style.display = "none"
    }, 459);
});


// Procurar produtos
const procurarProdutos = (search) => {
    produtos.forEach((produto) => {
        const nomeProduto = produto.querySelector("h3").innerText.toLowerCase();

        const nomePesquisa = search.toLowerCase();

        produto.style.display = "inline";

        if (!nomeProduto.includes(nomePesquisa)) {
            produto.style.display = "none";
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
        trocaCoracao(e.target);
    });
});


// Lista de desejo
listaDesejos.addEventListener("click", () => {
    trocaCoracao(coracaoDesejo);

    paragrafo.innerText = 'Exibindo muita "criatividade"';

    if (coracaoDesejo.classList.contains("fa-solid")) {
        let cont = 0;
        produtos.forEach((produto) => {
            divCoracao = produto.querySelector(".agrupamento-favoritos");
            coracaoTarget = divCoracao.querySelector("i");
            
            if (!coracaoTarget.classList.contains("fa-solid")) {
                produto.style.display = "none";
                cont += 1;
            }

            if (cont === 9) {
                paragrafo.innerText = "Nenhum Produto encontrado!!";
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
                    console.log(produto);
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


 // Array para armazenar os itens no carrinho
 let cart = [];


 // Função para adicionar um item ao carrinho
 function addToCart(id, name, price, showPrice) {

   // Verifica se o item já está no carrinho
   const existingItem = cart.find(item => item.id === id);
   
   if (existingItem) {
     existingItem.quantity++;
   } else {
     cart.push({ id, name, price, showPrice, quantity: 1 });
   };
   

   // Atualiza o carrinho na interface
   renderCart();
 };

 // Função para remover um item do carrinho
 function removeFromCart(id) {

   // Encontra o índice do item no carrinho
   const index = cart.findIndex(item => item.id === id);
   
   if (index !== -1) {
     // Remove o item do carrinho
     cart.splice(index, 1);
     

     // Atualiza o carrinho na interface
     renderCart();
   };
 };


 // Função para renderizar o carrinho na interface
 const showValue = document.querySelector("#price-bar-car");
 function renderCart() {
   const cartElement = document.getElementById('bar-car-produts');
   cartElement.innerHTML = ''; // Limpa o conteúdo do carrinho
   let value = 0
   if (cart.length === 0) {
     cartElement.innerHTML = '<p class="bar-car-not-found">Nenhum produto no carrinho</p>';
     showValue.innerText = "00,00";
   } else {
     cart.forEach(item => {
       const itemElement = document.createElement('div');
       itemElement.innerHTML = `
         <div class="bar-car-produt">
            <img src="./img/${item.id}.png" alt="${"produto-carrinho"}">
            <div class="info-produt-bar">
                <p>${item.name}</p>
                <h3>${item.showPrice}</h3>
            </div>
            <button class="btn" onclick="removeFromCart('${item.id}')">x</button>
         </div>
       `;
       cartElement.appendChild(itemElement);
       value = value + item.price;
     });
     console.log(cart[0]);
     showValue.innerText = value;
   };
 };


// Lado Esquerdo função fixed
const ladoEsquerdo = document.querySelector("#lado-esquerdo");

window.addEventListener("scroll", () => {
    if (scrollY >= 219) {
        ladoEsquerdo.style.position = "fixed";
        ladoEsquerdo.style.width = "17%";
        ladoEsquerdo.style.top = "0";
    } else {
        ladoEsquerdo.style.position = "absolute";
        ladoEsquerdo.style.width = "100%";
    }
});