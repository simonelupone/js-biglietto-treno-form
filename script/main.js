// definisco le mie variabili
const ticketStockPrice = 0.21;
const underDiscount = 0.8;
const overDiscount = 0.6;

// definisco gli elementi della pagina che mi servono
const distanceInput = document.getElementById('distance-field');
const userAge = document.getElementById('userAge-field');
const button = document.getElementById('button');
// console.log(distanceInput, userAge);
const distance = document.getElementById('distance');
const age = document.getElementById('age');
const price = document.getElementById('price');

// prendo il valore degli input
const kmValue = distanceInput.value;
const ageValue = userAge.value;

// calcolo il prezzo del biglietto
const ticketPrice = ticketStockPrice * kmValue;
// console.log(ticketPrice);
const finalPrice = (age) => {
    if (age < 18) {
        return ticketPrice * underDiscount;
    } else if (age > 65) {
        return ticketPrice * overDiscount;
    } else {
        return ticketPrice;
    }
};

button.addEventListener('click', function (event) {
    event.preventDefault();

    distance.innerHTML = kmValue;
    age.innerHTML = ageValue;

    // visualizzo il prezzo del biglietto
    price.innerHTML = Math.floor(finalPrice(ageValue) * 100) / 100 + ' €';
    console.log(finalPrice(ageValue));
});
