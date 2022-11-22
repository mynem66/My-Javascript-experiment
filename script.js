
// ADD FRUIT OPERATION
const myButton = document.getElementById("clickButton");

input = document.querySelector("addItem");

const ul = document.querySelector("ul");

myButton.addEventListener("click", function createList(){
    let list = document.createElement("li")
  let input = document.querySelector(".addItem");
    list.textContent = input.value;
    
    console.log(list);
  ul.appendChild(list)})

// REMOVE FRUIT OPERATION


function myFunction(){
  const list = document.getElementById("li")
  list.removeChild(list.firstElementChild)
}

