




const main = document.getElementById("main");




















main.addEventListener("click",function(event){
  console.log(event);
  
  if(this.className.indexOf(" gone ") > -1 ){
    this.className = this.className.replace(" gone ", "");
    alert("I feel better... " + event.y);
  }
  else{
    alert("ouch! " + event.x);
    this.className = this.className + " gone ";
  }
});