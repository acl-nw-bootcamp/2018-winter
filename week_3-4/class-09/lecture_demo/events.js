function isValidEntry(inputField) {
  if (inputField.value == "") {
    inputField.setAttribute("class", "required");
  } else {
    inputField.setAttribute("class", "");
  }
}

function validateForm(form) {
  var formIsValid = true;
  for (var index = 0; index < form.elements.length; index++) {
    if (form.elements[index].value == "") {
      formIsValid = false;
      console.log(form.elements[index].name + " has no value!");
    }
  }
  if (!formIsValid) {
    alert("All fields are required. Please review your entries.");
    return false;
  }
  return true;
}
