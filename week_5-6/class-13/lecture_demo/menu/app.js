function addListItem(content, listToAppend) {
  var newListItem = document.createElement("li");
  newListItem.innerText = content;
  listToAppend.appendChild(newListItem);
}

var navigationList = document.getElementById("main-menu");
