let depStation;
let arrStation;
let journey;
let discount;
let discountAmount;
let regularPrice;
let finalPrice;
let adultCheck;
let retiredCheck;


let ticketCode = Math.random().toString(36).slice(7).toUpperCase()

const mainButton = document.getElementById('mainButton');
const buyButton = document.getElementById('buyButton');
const ticket = document.getElementById('ticket');
const error = document.getElementById('error')
const distanceMessage = 'The distance to be travelled between stations is';
const price = 0.233;

tryAgain.addEventListener('click',
    function(){
        error.classList.add('d-none');
        mainButton.classList.remove('d-none');
    }
)

buyButton.addEventListener('click',
    function(){
    depStation = document.querySelector('#departureStation').value;
    arrStation = document.querySelector('#arrivalStation').value;
    adultCheck = document.getElementById('adultCheck').checked;
    retiredCheck = document.getElementById('retiredCheck').checked;
    journey = depStation + ' ' + arrStation;
        if (adultCheck == true && retiredCheck == false){
                    discount = 0.806;
                    discountAmount = "19.4%";
                    discountMessage = "You are eligible for a discount of 19.4%"
                } else if (adultCheck == false && retiredCheck == true){
                    discount = 0.623;
                    discountAmount = "37.7%";
                    discountMessage = "You are eligible for a discount of 37.7%"
                } else {
                    discount = 1;
                    discountAmount = "N/A";
                    discountMessage = "You are not eligible for discounts"
                }  
    mainButton.classList.add('d-none');
        switch (journey) {
            case 'Roma Roma':
            case 'Napoli Napoli':
            case 'Bari Bari':
            case 'Firenze Firenze':
            case 'Milano Milano':
            case 'Torino Torino':
            case 'Genova Genova':
            case 'Venezia Venezia':
                console.log("Departure and arrival Station are the same");
                error.classList.remove('d-none')
            break;
            case 'Roma Napoli':
            case 'Napoli Roma':
                console.log("Roma Napoli");
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 191.63 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 191.63);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Bari':
            case 'Bari Roma':
                console.log("Roma Bari")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 423.08 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 423.08);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Firenze':
            case 'Firenze Roma':
                console.log("Roma Firenze")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 233.36 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 233.36);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Milano':
            case 'Milano Roma':
                console.log("Roma Milano")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 513.52 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 513.52);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Torino':
            case 'Torino Roma':
                console.log("Roma Torino")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 636.99 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 636.99);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Genova':
            case 'Genova Roma':
                console.log("Roma Genova")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 644.77 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 644.77);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Roma Venezia':
            case 'Venezia Roma':
                console.log("Roma Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 460.18 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 460.18);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Bari':
            case 'Bari Napoli':
                console.log("Napoli Bari")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 226.68 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 226.68);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Firenze':
            case 'Firenze Napoli':
                console.log("Napoli Firenze")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 424.99 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 424.99);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Milano':
            case 'Milano Napoli':
                console.log("Napoli Milano")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 705.15 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 705.15);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Torino':
            case 'Torino Napoli':
                console.log("Napoli Torino")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 828.62 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 828.62);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Genova':
            case 'Genova Napoli':
                console.log("Napoli Genova")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 836.40 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 836.40);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Napoli Venezia':
            case 'Venezia Napoli':
                console.log("Napoli Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 651.81 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 651.81);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Bari Firenze':
            case 'Firenze Bari':
                console.log("Bari Firenze")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 656.44 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 656.44);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Bari Milano':
            case 'Milano Bari':
                console.log("Bari Milano")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 936.6 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 936.6);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Bari Torino':
            case 'Torino Bari':
                console.log("Bari Torino")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 1060.07 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 1060.07);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Bari Genova':
            case 'Genova Bari':
                console.log("Bari Genova")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 1067.85 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 1067.85);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Bari Venezia':
            case 'Venezia Bari':
                console.log("Bari Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 883.26 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 883.26);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Firenze Milano':
            case 'Milano Firenze':
                console.log("Firenze Milano")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 290.73 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 290.73);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Firenze Torino':
            case 'Torino Firenze':
                console.log("Firenze Torino")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 421.19 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 421.19);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Firenze Genova':
            case 'Genova Firenze':
                console.log("Genova Firenze")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 440.26 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 440.26);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Firenze Venezia':
            case 'Venezia Firenze':
                console.log("Firenze Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 229.27 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 229.27);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Milano Torino':
            case 'Torino Milano':
                console.log("Milano Torino")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 130.61 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 130.61);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Milano Genova':
            case 'Genova Milano':
                console.log("Genova Milano")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 133.79 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 133.79);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Milano Venezia':
            case 'Venezia Milano':
                console.log("Milano Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 252.18 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 252.18);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Torino Genova':
            case 'Genova Torino':
                console.log("Torino Genova")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 153.52 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 153.52);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Torino Venezia':
            case 'Venezia Torino':
                console.log("Torino Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 381.88 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 381.88);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            case 'Genova Venezia':
            case 'Venezia Genova':
                console.log("Genova Venezia")
                document.getElementById('container-from').innerHTML = depStation;
                document.getElementById('container-to').innerHTML = arrStation;
                document.getElementById('container-distance').innerHTML = distanceMessage + " 393.3 KM";
                ticket.classList.remove('d-none');
                regularPrice = (price * 393.3);
                finalPrice =  regularPrice * discount; 
                document.getElementById('container-regular-price').innerHTML = regularPrice.toFixed(2) + '€';
                document.getElementById('container-discount').innerHTML = discountAmount;
                document.getElementById('container-final-price').innerHTML = finalPrice.toFixed(2) + '€';
                document.getElementById('container-discount-message').innerHTML = discountMessage;
            break;
            default:
                console.log(`Nothing Selected`);
        }
    }
    
)

buyButton.addEventListener('click',
    function() {
        
    }
)