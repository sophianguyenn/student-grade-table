class App {
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error){
    console.error('error:', error);
  }

  handleGetGradesSuccess(grades){
    console.log('grades:', grades);
  }

  getGrades(){
    $.ajax({
      method: "GET",
      data: "none",
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
