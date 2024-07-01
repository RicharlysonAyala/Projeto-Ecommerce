const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');
const body = document.querySelector("body")

iconeCarrinho.addEventListener('click', () => {
    listCar.style.display = "flex";
    body.style.overflow = "hidden"
})
