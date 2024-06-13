/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_adjective() {
    let adjective;
    let random = getRandomInt(1, 3)
    // console.log("adjective  random int is "+ random )
    switch (random) {
        case 1: adjective = "Crazy"; break;
        case 2: adjective = "Amazing"; break;
        case 3: adjective = "Fire "; break;
        default: adjective = " example"; break;
    }
    return adjective;
}

function get_shopname() {
    let shop_name;
    let random = getRandomInt(1, 3)
    // console.log("Shop random int is "+ random )
    switch (random) {
        
        case 1: shop_name = "Engine"; break;
        case 2: shop_name = "Food "; break;
        case 3: shop_name = "Garments "; break;
        default: shop_name = " new Shop "; break;
    }
    return shop_name;
}


function get_anotherword() {
    let another_word;
    let random = getRandomInt(1, 3)
    // console.log("another word random int is "+ random )
    switch (random) {
        case 1: another_word = "Bros"; break;
        case 2: another_word = "Limited  "; break;
        case 3: another_word = "Hub "; break;
        default: another_word = "ltd"; break;
    }
    return another_word;
}

let adj = get_adjective();

let shop = get_shopname();

let another = get_anotherword();

console.log("business name is " + adj + " " + shop + " " + another)