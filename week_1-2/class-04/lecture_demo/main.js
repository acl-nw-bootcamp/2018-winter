var globalVariable = "GLOBAL!"

function saySomething(message) {
  if (message) {
    alert(message);
  } else {
    alert("\"Something\"");
  }
}

function getUserName() {
  var userName;
  do {
    userName = prompt("Yo! What's your name?");
  } while (userName.indexOf(" ") < 0);
  userName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
  return userName;
}

function capitalize(text) {
  var makeCaps = true;
  var newText = "";
  for (index = 0; index < text.length; index++) {
    newText += makeCaps? text[index].toUpperCase() : text[index].toLowerCase();
    makeCaps = text[index] == " ";
  }
  return newText;
}

function getProperName() {
  var name = getUserName();
  name = capitalize(name);
  // document.write(name);
  document.getElementById("proper-name").innerHTML = "<a href='#'>"+name+"</a>";
}

function showGlobal() {
  saySomething("Global Variable: "+globalVariable);
}
