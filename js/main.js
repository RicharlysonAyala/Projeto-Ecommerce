const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body");
const fechar = document.querySelector('#fechar')
const corPreta = document.querySelector("#cor-preta")

iconeCarrinho.addEventListener('click', () => {
    listCar.classList.remove("fechar")
    listCar.classList.add("abrir")
    body.style.overflow = "hidden"
    listCar.style.display = "flex"
})

fechar.addEventListener('click', () => {
    listCar.classList.remove("abrir")
    listCar.classList.add("fechar")
    body.style.overflow = "scroll"
    setTimeout(() => {
        listCar.style.display = "none"
    }, 500);
})