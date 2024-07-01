const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body");
const fechar = document.querySelector('#fechar')

iconeCarrinho.addEventListener('click', () => {
    listCar.style.display = "flex";
    body.style.overflow = "hidden"
})

fechar.addEventListener('click', () => {
    listCar.style.display = "none";
    body.style.overflow = "none"
})