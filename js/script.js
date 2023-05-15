const age = parseInt(document.getElementById('age').value);
const kilometers = parseInt(document.getElementById('kilometers').value); 

let travelPrice = kilometers * 0.233;
let finalPrice;

buyButton = document.querySelector('button')

buyButton.addEventListener('click', 
    function(){
        if (age < 18){
            finalPrice = travelPrice - (travelPrice * (19.4 / 100));
            console.log(finalPrice);
        } else if (age >= 65) {
            finalPrice = travelPrice - (travelPrice * (37.7 / 100));
            console.log(finalPrice);
        } else {
            finalPrice = travelPrice;
            console.log(finalPrice);
        }
    }
    
)

