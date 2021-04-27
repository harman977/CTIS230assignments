myitem = document.getElementById("firsttest");
 myitem.addEventListener("click", onClick);
 function onClick() {
 myitem.style.color = "blue";
 }



function functionsurprise() {
  document.getElementById("surprise").innerHTML = "Hi Rob!!  Hope I get full points for this assignment.";
}


function btnclick() {
  document.getElementById("changebtntxt").innerHTML = "This is assignment 6 and this button is working.";
}

function changetxt() {
	newtext = txtfield1.value;
 otheritem.innerHTML = newtext;
}


function courselist() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("coursehere").innerHTML = "You selected: " + x;
}