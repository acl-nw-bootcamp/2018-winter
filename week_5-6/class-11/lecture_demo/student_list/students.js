var Student = function(fullName, pictureName) {
  this.name = fullName;
  this.account = "";
  this.image = pictureName;
}

var students = [];
students.push(new Student("Lauren Carroll-Allan", "Lauren.jpg"));
students.push(new Student("David Chhing", "David.jpg"));
students.push(new Student("Nancy Perez", "Nancy.jpg"));
students.push(new Student("Daniel Rogers", "Daniel.jpg"));
students.push(new Student("Valerie Siira", "Valerie.jpg"));
students.push(new Student("William Tronvig", "William.jpg"));

function buildStudentList() {
  var list = document.getElementById("student-list");
  for(var index = 0; index < students.length; index++) {
    var listItem = document.createElement("li");
    listItem.textContent = students[index].name;
    list.appendChild(listItem);
  }
}

// var userEnteredNumber = parseInt(form.userNumber.value, 10);

window.addEventListener("load", buildStudentList);
