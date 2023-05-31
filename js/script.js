// Console check
console.log("JS OK");


const listElement = document.getElementById("myList");

for (let i = 1; i <= 100; i++) {
    console.log(i)

let content = i;

if (!(i % 15)) content = "fizzbuzz"
else if ( (!i % 3)) content = "fizz"
else if ( (!i % 5)) content = "buzz"

    console.log(content)
    listElement.innerHTML += "<li> ${content} </li> `
}