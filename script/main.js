// definisco le mie variabili
const ticketStockPrice = 0.21;
const underDiscount = 0.8;
const overDiscount = 0.6;

// definisco gli elementi della pagina che mi servono
const distanceInput = document.getElementById('distance-field');
const userAge = document.getElementById('user-age-field');
const userName = document.getElementById('name-field');
const userLastName = document.getElementById('last-name-field');

const button = document.querySelector('.button');
const buttonReset = document.querySelector('.button-reset');
// console.log(distanceInput, userAge);

const distance = document.getElementById('user-distance');
const age = document.getElementById('user-age');
const name = document.getElementById('user-name');
const lastName = document.getElementById('user-last-name');
const price = document.getElementById('user-ticket-price');
const stockPrice = document.getElementById('stock-price');
const badge = document.querySelector('.badge')

// prendo il valore degli input
const kmValue = distanceInput.value;
const ageValue = userAge.value;
const nameValue = userName.value;
const lastNameValue = userLastName.value;


// calcolo il prezzo del biglietto
const ticketPrice = ticketStockPrice * kmValue;
// console.log(ticketPrice);
const finalPrice = (age) => {
    if (age < 18) {
        badge.classList.add('text-bg-info');
        badge.classList.remove('d-none');
        badge.innerHTML = 'Sconto Young';
        stockPrice.innerHTML = (ticketStockPrice * underDiscount).toFixed(2) + ' €';
        return ticketPrice * underDiscount;
    } else if (age > 65) {
        badge.classList.add('text-bg-warning');
        badge.classList.remove('d-none');
        badge.innerHTML = 'Sconto Senior';
        stockPrice.innerHTML = (ticketStockPrice * overDiscount).toFixed(2) + ' €';
        return ticketPrice * overDiscount;
    } else {
        return ticketPrice;
    }
};

button.addEventListener('click', function (event) {
    event.preventDefault();

    distance.innerHTML = kmValue;
    age.innerHTML = ageValue;
    name.innerHTML = nameValue;
    lastName.innerHTML = lastNameValue;
    stockPrice.innerHTML = ticketStockPrice + ' €';

    // visualizzo il prezzo del biglietto
    price.innerHTML = finalPrice(ageValue).toFixed(2) + ' €';
    // console.log(finalPrice(ageValue));
});

buttonReset.addEventListener('click', function (event) {
    event.preventDefault();
    distanceInput.value = '';
    userAge.value = '';
    userName.value = '';
    userLastName.value = '';
});