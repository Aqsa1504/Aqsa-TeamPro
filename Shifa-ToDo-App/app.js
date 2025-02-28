let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "X";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("clicked");
    }
});