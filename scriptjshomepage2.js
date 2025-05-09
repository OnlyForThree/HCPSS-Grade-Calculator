// install SQLite3 packages by entering "npm install sqlite3" into the console
// const sqlite3 = require('sqlite3').verbose();

// // Open a connection to the database
// const db = new sqlite3.Database('./db.sqlite');

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

function openFile(fileName) {
  var i;
  var x = document.getElementsByClassName("file");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(fileName).style.display = "block";  
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
    const quarterGrade1 = convertLetterToNumber(gradeLetterQ1) * .2;
    const quarterGrade2 = convertLetterToNumber(gradeLetterQ2) * .2;
    const quarterGrade3 = convertLetterToNumber(gradeLetterQ3) * .2;
    const quarterGrade4 = convertLetterToNumber(gradeLetterQ4) * .2;
    const midtermGrade = convertLetterToNumber(midterms) * 0.1;
    const finalGrade = convertLetterToNumber(finals) * 0.1;

    return quarterGrade1 + midtermGrade + finalGrade + quarterGrade2 + quarterGrade3 + quarterGrade4;
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
courseid1="";
courseid2="";
courseid3="";
courseid4="";
courseid5="";
courseid6="";
courseid7="";

function setGradeCourse1(letter) {
  courseid1 = letter;
  document.getElementById("courseid1").innerHTML = letter;
}
function setGradeCourse2(letter) {
  courseid2 = letter;
  document.getElementById("courseid2").innerHTML = letter;
}
function setGradeCourse3(letter) {
  courseid3 = letter;
  document.getElementById("courseid3").innerHTML = letter;
}
function setGradeCourse4(letter) {
  courseid4 = letter;
  document.getElementById("courseid4").innerHTML = letter;
}
function setGradeCourse5(letter) {
  courseid5 = letter;
  document.getElementById("courseid5").innerHTML = letter;
}
function setGradeCourse6(letter) {
  courseid6 = letter;
  document.getElementById("courseid6").innerHTML = letter;
}
function setGradeCourse7(letter) {
  courseid7 = letter;
  document.getElementById("courseid7").innerHTML = letter;
}

function addValuestoUnweighted(course, typeCourse) {
  let courseValues = [];
  if (course.equals("A")) {
    courseValues.push(4.0)
  }  
}

class GPAcalculator {

  calculateGPA(courseValues, typeValues) {
      let rawSum = 0;
      let weightedSum = 0;
      for (let i = 0; i < this.count; i++) {
          rawSum += parseInt(courseValues[i]);
          if (parseInt(courseValues[i]) > 1) {
              weightedSum += parseInt(courseValues[i]) + typeValues[i];
          } else {
              weightedSum += parseInt(courseValues[i]);
          }
      }
      document.getElementById("unweightedgpa").innerText = (rawSum / 7).toFixed(2);
      document.getElementById("weightedGPA").innerText = (weightedSum / 7).toFixed(2);
  }
}

const calculator = new GPAcalculator();


// // Function to query course descriptions
// function getCourseDescriptions() {
//     return new Promise((resolve, reject) => {
//         db.all('SELECT * FROM course_descriptions', (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }

// // Function to query course weights
// function getCourseWeights() {
//     return new Promise((resolve, reject) => {
//         db.all('SELECT * FROM course_weights', (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }

// // Function to query courses by description name
// function getCoursesByDescription(descriptionName) {
//     return new Promise((resolve, reject) => {
//         const query = `
//             SELECT courses.id, courses.course_name, course_weights.weight_name, course_weights.weighting, course_weights.credits
//             FROM courses
//             INNER JOIN course_descriptions ON courses.description_id = course_descriptions.id
//             INNER JOIN course_weights ON courses.weight_id = course_weights.id
//             WHERE course_descriptions.description_name = ?;
//         `;
//         db.all(query, [descriptionName], (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }

// // Sample event handler
// function onEvent(eventType, eventData) {
//     if (eventType === 'getCourseDescriptions') {
//         getCourseDescriptions()
//             .then(descriptions => {
//                 console.log('Course Descriptions:', descriptions);
//             })
//             .catch(err => {
//                 console.error('Error getting course descriptions:', err);
//             });
//     } else if (eventType === 'getCourseWeights') {
//         getCourseWeights()
//             .then(weights => {
//                 console.log('Course Weights:', weights);
//             })
//             .catch(err => {
//                 console.error('Error getting course weights:', err);
//             });
//     } else if (eventType === 'getCoursesByDescription') {
//         getCoursesByDescription(eventData.descriptionName)
//             .then(courses => {
//                 console.log('Courses for Description:', courses);
//             })
//             .catch(err => {
//                 console.error('Error getting courses by description:', err);
//             });
//     }
// }
