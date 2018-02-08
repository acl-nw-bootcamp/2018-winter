var names = new Array("Mark", "John", "Jane", "Jack", "Julie");

var message = "Students: ";
for (var index = 0; index < names.length; index++) {
  message += "\n" + names[index];
}

// alert (message);

var students = new Array();
// var mark = new Array("Mark Fitzgerald", "503-555-5555", "mark@alchemycodelab.com");
students.push(new Array("Mark Fitzgerald", "503-555-5555", "mark@alchemycodelab.com"));
students.push(new Array("John Doe", "503-555-1234", "john.doe@gmail.com"));
students.push(new Array("Jane Citizen", "503-555-9876", "jane.citizen@gmail.com"));
students.push(new Array("Jack Student", "503-555-1122", "jack@school.com"));
students.push(new Array("Julie Public", "503-555-9988", "julie_9988@hotmail.com"));

var tableInfo = "";
for(var index = 0; index < students.length; index++) {
  var currentStudent = students[index];
  var name = currentStudent[0];
  var phone = currentStudent[1];
  var email = currentStudent[2];
  var dataRow = "<tr><td>"+name+"</td><td>"+phone+"</td><td>"+email+"</td></tr>";
  tableInfo += dataRow;
}

document.getElementById("student-listing").innerHTML = tableInfo;
