var student = {};
student.name = "Mark Fitzgerald";
student.phone = "503-555-1234";
student.email = "mark@alchemycodelab.com";
student.showInfo = function() {
  var message = "STUDENT";
  message += "\n"+student.name;
  message += "\n"+student.phone;
  message += "\n"+student.email;
  alert(message);
}

var instructor = {
  name: "Jane Citizen",
  phone: "503-555-5555",
  email: "jane@work.com",
  showInfo: function() {
    var message = "INSTRUCTOR";
    message += "\n"+instructor.name;
    message += "\n"+instructor.phone;
    message += "\n"+instructor.email;
    alert(message);
  }
}


var students = [];
students.push({name: "Mark Fitzgerald", phone: "503-555-1234", email: "mark@alchemycodelab.com"});
students.push({name: "John Doe", phone: "503-555-1111", email: "john.doe@gmail.com"});
students.push({name: "Jane Student", phone: "503-555-5555", email: "janes@gmail.com"});
students.push({name: "Julie Person", phone: "503-555-9999", email: "jp_8843@hotmail.com"});
students.push({name: "Jack Newbie", phone: "503-555-5678", email: "jake.new@home.com"});

buildTable();

function buildTable() {
  var studentHTML = "<tr><th>Student</th><th>Phone</th><th>E-Mail</th></tr>";
  for (var index = 0; index < students.length; index++) {
    var currentStudent = students[index];
    studentHTML += "<tr><td>"+currentStudent.name+"</td><td>"+currentStudent.phone+"</td><td>"+currentStudent.email+"</td></tr>";
  }
  document.getElementById("students").innerHTML = studentHTML;
}

function addStudent() {
  var name = prompt("Student Name:");
  var phone = prompt("Phone:");
  var email = prompt("E-Mail:");
  students.push({name: name, phone: phone, email: email});
  buildTable();
}
