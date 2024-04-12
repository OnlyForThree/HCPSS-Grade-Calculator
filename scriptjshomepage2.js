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

gradeLetterQ1="";
gradeLetterQ2="";
gradeLetterQ3="";
gradeLetterQ4="";
unweighted = 0;
weighted = 0;

function setGradeNumberQ1(letter) {
  gradeLetterQ1 = letter;
  document.getElementById("letter1").innerHTML = letter;
}

function setGradeNumberQ2(letter) {
  gradeLetterQ2 = letter;
  document.getElementById("letter2").innerHTML = letter;
}

function setGradeNumberQ3(letter) {
  gradeLetterQ3 = letter;
  document.getElementById("letter3").innerHTML = letter;
}

function setGradeNumberQ4(letter) {
  gradeLetterQ4 = letter;
  document.getElementById("letter4").innerHTML = letter;
}


const calcAssess = () => {
  const qtrSum = [...document.querySelectorAll(".qtra")].reduce((x,y) => x + parseInt(y.value), 0);
  let total = qtrSum * (1 / 5);
  const qtr1 = document.getElementById("qtr1a").value;
  const qtr2 = document.getElementById("qtr2a").value;
  const qtr3 = document.getElementById("qtr3a").value;
  const qtr4 = document.getElementById("qtr4a").value;
  if ((parseInt(qtr3) + parseInt(qtr4) === 0) || ((parseInt(qtr1) + parseInt(qtr2) === 0) && (parseInt(qtr3) === 0 || parseInt(qtr4) === 0))) total = 0;
  document.getElementById("gradea").innerText = total >= 3.5 ? 'A' : total >= 2.5 ? 'B' : total >= 1.5 ? 'C' : total >= 0.75 ? 'D' : 'E';
}
