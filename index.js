// Write your code here!

// let newElement = document.createElement('input')
// document.body.appendChild(newElement)

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);


// var el = document.getElementById("main");
// el.remove()

// let newHeader = document.createElement('h1')
// newHeader.setAttribute("id", "victory")

// newHeader.innerHTML = "Oksana is the champion";