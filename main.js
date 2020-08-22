var tableElement = document.querySelector('student-grade-table');
var gradeTable = new GradeTable(tableElement);

var studentGrades = new App(gradeTable);
studentGrades.start();
