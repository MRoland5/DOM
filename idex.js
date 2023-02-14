console.dir(document);
console.log(document.head)
console.log(document.all)
document.all[8].textContent="Masik Cim"
console.log(document.getElementById("main_title"))
let item = document.getElementsByClassName("item")
console.log(item)
item[2].style.backgroundColor="grey"
let items = document.getElementsByClassName("item");
console.log(items);
for (let i = 0; i < items.length; i++) {
  if (i % 2 == 1) {
    items[i].style.backgroundColor = "lightgray"
  }
}
console.log(document.getElementsByTagName("h2"));
console.log(document.querySelector("#elso a"))
let elsolink= document.querySelector("#elso p");
elsolink.style.color="red";
console.log(document.querySelectorAll("#list h2"))
let lista=document.querySelectorAll(".title")
lista[1].style.color="red"