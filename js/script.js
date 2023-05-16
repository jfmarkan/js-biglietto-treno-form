let travelPrice;
let finalPrice;

const ageInserted = document.getElementById('age');
const kilometersInserted = document.getElementById('kilometers'); 
const buyButton = document.querySelector('button');

buyButton.addEventListener('click', 
    function(){
        const age = parseInt(ageInserted.value);
        const kilometers = parseInt(kilometersInserted.value);
        travelPrice = kilometers * 0.233;
        if (age < 18){
            finalPrice = travelPrice - (travelPrice * (19.4 / 100));
            console.log(finalPrice);
            document.getElementById('travel').innerHTML = travelPrice.toFixed(2) +'€';
            document.getElementById('discount').innerHTML = '19.4%';
            document.getElementById('total').innerHTML = finalPrice.toFixed(2) +'€';
        } else if (age >= 65) {
            finalPrice = travelPrice - (travelPrice * (37.7 / 100));
            console.log(finalPrice);
            document.getElementById('travel').innerHTML = travelPrice.toFixed(2) +'€';
            document.getElementById('discount').innerHTML = '37.7%';
            document.getElementById('total').innerHTML = finalPrice.toFixed(2) +'€';
        } else {
            finalPrice = travelPrice;
            console.log(finalPrice);
            document.getElementById('travel').innerHTML = travelPrice.toFixed(2) +'€';
            document.getElementById('discount').innerHTML = '0%';
            document.getElementById('total').innerHTML = finalPrice.toFixed(2) +'€';
        }
    }
)

