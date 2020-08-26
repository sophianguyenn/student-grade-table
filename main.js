var tableElement = document.querySelector('table');
var gradeTable = new GradeTable(tableElement);

var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement);

var studentGrades = new App(gradeTable, pageHeader);
studentGrades.start();
