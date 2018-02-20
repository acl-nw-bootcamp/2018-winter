var Person = function(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  var contactInfo = "\tPhone: "+this.phone+"\n\tE-Mail: "+this.email;
  this.sayGreeting = function() {
    alert("Hello! My name is "+this.name+".\nMy Contact Info is:\n"+contactInfo);
  }
}

var students = [];
students.push(new Person("John Doe", "503-555-1234", "johndoe@gmail"));
students.push(new Person("Jane Student", "503-555-9876", "js-rules@gmail.com"));
students.push(new Person("Jack Public", "503-555-5555", "jackster_999@hotmail.com"));
students.push(new Person("Julie Citizen", "503-555-1111", "jules4ever@aol.com"));

function makeTable() {
  var table = document.getElementById("student-listing");
  table.innerHTML = "<tr><th>Student</th><th>Phone</th><th>E-Mail</th></tr>";
  // var row = document.createElement("tr");
  // var cell = document.createElement("th");
  // cell.innerText = "Student";
  // row.appendChild(cell);
  // cell = document.createElement("th");
  // cell.innerText = "Phone";
  // row.appendChild(cell);
  // cell = document.createElement("th");
  // cell.innerText = "E-Mail";
  // row.appendChild(cell);
  // table.appendChild(row);

  for(var index = 0; index < students.length; index++) {
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.innerText = students[index].name;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = students[index].phone;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = students[index].email;
    row.appendChild(cell);
    table.appendChild(row);
  }
}

function addStudent() {
  var name = prompt("Student Name:");
  var phone = prompt("Student Phone:");
  var email = prompt("Student E-Mail:");
  students.push(new Person(name, phone, email));
  makeTable();
}

makeTable();
