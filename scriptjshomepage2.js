// Sidebar functions for opening and closing
function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

function openCity(file) {
  var i;
  var x = document.getElementsByClassName("file");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(file).style.display = "block";
}

// Global variables for grades
let gradeLetterQ1 = "";
let gradeLetterQ2 = "";
let gradeLetterQ3 = "";
let gradeLetterQ4 = "";
let finals = "";
let midterms = "";

// Functions to set grades for each quarter and exams
function setGradeNumberQ1(letter) {
  gradeLetterQ1 = letter;
  document.getElementById("letter1").innerHTML = letter;
  updateGradeQuarter();
}

function setGradeNumberQ2(letter) {
  gradeLetterQ2 = letter;
  document.getElementById("letter2").innerHTML = letter;
  updateGradeQuarter();
}

function setGradeNumberQ3(letter) {
  gradeLetterQ3 = letter;
  document.getElementById("letter3").innerHTML = letter;
  updateGradeQuarter();
}

function setGradeNumberQ4(letter) {
  gradeLetterQ4 = letter;
  document.getElementById("letter4").innerHTML = letter;
  updateGradeQuarter();
}

function setGradeMidterm(letter) {
  midterms = letter;
  document.getElementById("midterm").innerHTML = letter;
  updateGradeQuarter();
}

function setGradeFinals(letter) {
  finals = letter;
  document.getElementById("finals").innerHTML = letter;
  updateGradeQuarter();
}

class GradeCalculator {
  constructor() {
    this.gradeDisplay = document.getElementById("finalGrade");
  }

  calculateQuarterSum() {
    // Convert letter grades to numerical values
    const convertLetterToNumber = (letter) => {
      return letter.toUpperCase() === 'A' ? 4 :
             letter.toUpperCase() === 'B' ? 3 :
             letter.toUpperCase() === 'C' ? 2 :
             letter.toUpperCase() === 'D' ? 1 : 0;
    };

    // Calculate weighted scores
    const quarterGrades = [gradeLetterQ1, gradeLetterQ2, gradeLetterQ3, gradeLetterQ4].map(convertLetterToNumber).reduce((acc, grade) => acc + (grade * 0.2), 0);
    const midtermGrade = convertLetterToNumber(midterms) * 0.1;
    const finalGrade = convertLetterToNumber(finals) * 0.1;

    return quarterGrades + midtermGrade + finalGrade;
  }

  calculateTotal() {
    const totalScore = this.calculateQuarterSum();
    // Determine letter grade based on the total score
    if (totalScore >= 3.5) return 'A';
    if (totalScore >= 2.5) return 'B';
    if (totalScore >= 1.5) return 'C';
    if (totalScore >= 0.75) return 'D';
    return 'E';
  }

  calculateGrade() {
    const grade = this.calculateTotal();
    this.gradeDisplay.innerText = grade;
  }
}

const gradeCalculator = new GradeCalculator();

function updateGradeQuarter() {
  gradeCalculator.calculateGrade();
}
