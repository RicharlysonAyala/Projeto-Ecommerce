<<<<<<< HEAD
// Close/Open carrinho

=======
// Produtos
const produtos = document.querySelectorAll(".produto");


// Seleção de elementos
>>>>>>> c4658d6a2c5f0cea24e459f5d55b2de9b42a37a7
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
})

// Lista de Desejos
 
const iconeDesejo = document.querySelector('.fa-heart coracao-desejo');
const listaDesejo = document.querySelector('.agrupamento-desejo');
const produto = document.querySelector('.produto')

iconeDesejo.addEventListener('click', () => {
    
})
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
        console.log(e.target);
    });
});

 // Array para armazenar os itens no carrinho
 let cart = [];

 // Função para adicionar um item ao carrinho
 function addToCart(id, name, price) {
   // Verifica se o item já está no carrinho
   const existingItem = cart.find(item => item.id === id);
   
   if (existingItem) {
     existingItem.quantity++;
   } else {
     cart.push({ id, name, price, quantity: 1 });
   }
   
   // Atualiza o carrinho na interface
   renderCart();
 }

 // Função para remover um item do carrinho
 function removeFromCart(id) {
   // Encontra o índice do item no carrinho
   const index = cart.findIndex(item => item.id === id);
   
   if (index !== -1) {
     // Remove o item do carrinho
     cart.splice(index, 1);
     
     // Atualiza o carrinho na interface
     renderCart();
   }
 }

 // Função para renderizar o carrinho na interface
 function renderCart() {
   const cartElement = document.getElementById('cart');
   cartElement.innerHTML = ''; // Limpa o conteúdo do carrinho
   
   if (cart.length === 0) {
     cartElement.innerHTML = '<p>Carrinho vazio</p>';
   } else {
     cart.forEach(item => {
       const itemElement = document.createElement('div');
       itemElement.innerHTML = `
         <div>
           <span>${item.name} - R$${item.price} (${item.quantity})</span>
           <button class="btn" onclick="removeFromCart('${item.id}')">Remover</button>
         </div>
       `;
       cartElement.appendChild(itemElement);
     });
   }
 }