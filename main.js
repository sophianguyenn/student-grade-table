var tableElement = document.querySelector('table');
var gradeTable = new GradeTable(tableElement);

var studentGrades = new App(gradeTable);
studentGrades.start();
