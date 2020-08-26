class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tBody = this.tableElement.querySelector('tbody');
    tBody.textContent = ' ';

    for(var i = 0; i < grades.length; i++) {
      var tr = document.createElement('tr');

      var studentName = document.createElement('td');
      studentName.textContent = grades[i].name;

      var courseName = document.createElement('td');
      courseName.textContent = grades[i].course;

      var grade = document.createElement('td');
      grade.textContent = grades[i].grade;

      tr.appendChild(studentName)
      tr.appendChild(courseName)
      tr.appendChild(grade)
      tBody.appendChild(tr)
    }
  }
}
