// definisco gli elementi della pagina che mi servono
const distanceInput = document.getElementById('distance');
const userAge = document.getElementById('userAge');
const button = document.getElementById('button');
// console.log(distanceInput, userAge);

// prendo il valore degli input
const km = distanceInput.value;
const age = userAge.value;

button.addEventListener('click', function () {
    console.log(km, age);
    userAge.value = '';
    distanceInput.value = '';
});
