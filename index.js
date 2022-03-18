// Write your code here!

// let newElement = document.createElement('input')
// document.body.appendChild(newElement)


var el = document.getElementById("main");
el.remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")

newHeader.innerHTML = "Oksana is the champion";