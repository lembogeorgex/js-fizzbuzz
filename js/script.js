// Console check
console.log("JS OK");


const myList = document.getElementById("myList");

for (let i = 1; i <= 100; i++) {

// contenuto base
let content = i;

// Considerazione dei multipli
if (i % 15 === 0) content = "fizzbuzz"
else if (i % 3 === 0) content = "fizz"
else if (i % 5 === 0) content = "buzz"



// Preparo l'elemento LI
const listItem = document.createElement ("li")
listItem.append(content)
if (isNaN(content)) listItem.className = content.toLowerCase();

// Aggancio all'ul
myList.appendChild(listItem)
}