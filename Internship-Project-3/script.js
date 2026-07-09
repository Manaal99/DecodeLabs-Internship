
function welcomeMessage(){
alert("Welcome to FreshSip Juices!");
}


function changeTheme(){
document.body.style.backgroundColor="pink";
alert("Theme Changed Successfully!");
}


function showMore(){
document.getElementById("extraInfo").innerHTML=
"Our juices are made daily using locally sourced fruits. We never use artificial colours, flavours or preservatives. FreshSip also supports local farmers by purchasing fresh seasonal produce.";
}
function countProducts(){
document.getElementById("totalProducts").innerHTML=
"We currently offer 5 delicious organic juices.";
}


document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("contactForm");
if(form){
form.addEventListener("submit", function(event){
event.preventDefault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
if(name=="" || email=="" || message==""){
document.getElementById("response").style.color="red";
document.getElementById("response").innerHTML="Please fill in all fields.";
}

else{
document.getElementById("response").style.color="green";
document.getElementById("response").innerHTML="Thank you! Your message has been sent successfully.";
form.reset();
}
});
}
});