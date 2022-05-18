alert("My First MAJIC!");

console.log("my first log!");
console.log(document);
console.log(document.getElementById("myFristForm"));
console.log(document.getElementsByTagName("label"));
console.log(document.getElementsByClassName(".special"));
console.log(document.querySelector("#myFristForm"));

var form = document.getElementById("myFristForm");
var goBtn = document.getElementById("go");

goBtn.addEventListener("click",doWhatIWant);

function doWhatIWant(event){
  console.log("this is my this:");
  console.log(this);
  console.log("this is my event");
  console.log(event);
  console.log("this is my form");
  console.log(form);
  console.log("these are my form elements");
  console.log(form.elements[1].value);
  
  for(var i = 0; i < form.elements.length; i++){
    alert(form.elements[i].name);
  }

}