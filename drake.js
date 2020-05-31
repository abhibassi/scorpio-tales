document.querySelector("textarea").addEventListener("keyup", function() {
  const div = document.querySelector("#preview");

  if (this.value != "") {
    div.innerHTML = this.value;
  } else {
    div.innerHTML = "Start typing";
  }
})