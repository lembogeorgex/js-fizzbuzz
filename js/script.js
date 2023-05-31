// Console check
console.log("JS OK");


const myList = document.getElementById("myList");

for (let i = 1; i <= 100; i++) {
    console.log(i)

let content = i;

if (i % 15 === 0) content = "fizzbuzz"
else if (i % 3 === 0) content = "fizz"
else if (i % 5 === 0) content = "buzz"

    console.log(content)
    myList.innerHTML += `<li class="${content}>${content}</li>`
}