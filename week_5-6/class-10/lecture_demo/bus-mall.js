function addListeners() {
  document.getElementById("carousel").addEventListener("click", registerImageClick);
}

function registerImageClick(event) {
  if (event.target.tagName == "IMG") {
    // console.log(event.target.src);
    var index = event.target.src.lastIndexOf("/");
    // console.log(index);
    console.log(event.target.src.substring(index + 1));
  }
}

window.addEventListener("load", addListeners);
