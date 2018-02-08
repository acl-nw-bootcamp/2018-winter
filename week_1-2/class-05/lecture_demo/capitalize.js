var name = "mark fitzgerald";

function capitalize(text) {
  var capitalizedText = "";

  for (var character = 0; character < text.length; character++) {
    var currentLetter = text.substring(character, character+1);
    var previousLetter = text.substring(character-1, character);

    // if (previousLetter == " ") {
    //   console.log(currentLetter.toUpperCase());
    // } else if (character == 0) {
    //   console.log(currentLetter.toUpperCase());
    // } else {
    //   console.log(currentLetter);
    // }

    if ((previousLetter == " ") || (character == 0)) {
      capitalizedText += currentLetter.toUpperCase();
      // console.log(currentLetter.toUpperCase());
    } else {
      capitalizedText += currentLetter.toLowerCase();
      // console.log(currentLetter);
    }
  }

  return capitalizedText;
}

capitalize(name);
