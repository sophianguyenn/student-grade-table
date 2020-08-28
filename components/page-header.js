class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log('newAverage:', newAverage)
    var badgeElement = this.headerElement.querySelector('span');
    var displayedAvg = badgeElement.textContent = newAverage
    console.log(displayedAvg)
  }
}
