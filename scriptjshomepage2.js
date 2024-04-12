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


function setGradeNumberQ1(letter) {
  gradeLetter = letter;
  document.getElementById("letter1").innerHTML = letter;
}

function setGradeNumberQ2(letter) {
  gradeLetter = letter;
  document.getElementById("letter2").innerHTML = letter;
}
