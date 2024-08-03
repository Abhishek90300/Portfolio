var tablinks = document.getElementsByClassName("links");

var tabcontents = document.getElementsByClassName("contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active");

  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidebar");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-250px";
}
