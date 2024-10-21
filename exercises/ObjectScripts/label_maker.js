"use strict"

let bron = {
name: "LeGoat James",
address: "623 Goat Drive",
city: "Akron",
state: "Ohio",
zip: "4RING",
}

function printContact (bron) {
    console.log(bron);
}
printContact(bron);


let friend = {
    first: "Imaginary",
    last: "Friend",
    age: 300,
    height: "9'0",
    playsBasketball: false
}

function printLabel(friend) {
    let mailingLabel = `
    ${friend.first}
    ${friend.last}
    ${friend.age}, ${friend.height}, ${friend.playsBasketball}
    `;

    console.log(mailingLabel);
    
    

}
console.log(friend);