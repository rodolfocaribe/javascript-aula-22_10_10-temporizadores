function incrementar() {
   document.getElementById("cont").innerHTML++;
}

function play(){
  setInterval(incrementar, 2000);
}function play2(){
  setTimeout(helloworld, 2000);
}
function helloworld(){
  alert("Hello World");
}
