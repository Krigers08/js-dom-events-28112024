const body = document.body;
const div = document.createElement("div");

div.innerText = "Sveiki";
// div.innerHTML = "<small>Sveiks1</small>";

body.append(div);

const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanHi.remove()
//ieliekot hi tiks nonemts hello un ja bye tad tiks iznemts bye

console.log(spanHi.id)
// console.log(spanBye.id = 'adad')
//nomaina id

console.log(spanBye.dataset.test)
//izvada "data-..."


spanHi.classList.add('hi3');

spanHi.style.color = "red"
