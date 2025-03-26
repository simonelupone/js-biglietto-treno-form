// definisco gli elementi della pagina che mi servono
const distanceInput = document.getElementById('distance-field');
const userAge = document.getElementById('userAge-field');
const button = document.getElementById('button');
// console.log(distanceInput, userAge);
const distance = document.getElementById('distance');
const age = document.getElementById('age');
// prendo il valore degli input
const kmValue = distanceInput.value;
const ageValue = userAge.value;

button.addEventListener('click', function () {
    console.log(kmValue, ageValue);
    distance.innerHTML = kmValue;
    age.innerHTML = ageValue;
});
