const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const listCar = document.querySelector('#bar-car');

iconeCarrinho.addEventListener('click', () => {
    listCar.style.display = "flex";
})
