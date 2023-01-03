const input = document.getElementsByClassName("input")[0];
const pencil = document.getElementsByClassName("fa-pencil")[0];
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function () {
  allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addItem();
  }
});

function addItem() {
  let li = document.createElement("li");
  li.innerHTML = userInput.value;
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
  allItems.insertAdjacentElement("beforeend", li);
  userInput.value = "";
}
