class App {
  constructor(gradeTable, pageHeader){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }

  handleGetGradesError(error){
    console.error('error:', error);
  }

  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
  }

  getGrades(){
    $.ajax({
      method: "GET",
      headers: {
        "X-Access-Token": "9uwHKear"
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
    })
  }

  start(){
    this.getGrades();
  }
}
