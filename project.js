var first = prompt("first name?")
var last = prompt("last name?")
var age = prompt("what is your age?")
var tall = prompt("how tall are you in centimeters?")
var pet= prompt("what is your pet name?")

var namecond = null;
var agecond = null;
var tallcond = null;
var petcond = null;

if (first[0] === last[0]) {
  namecond = true;
}else {
  namecond = false;
}

if (age < 30 && age > 20){
  agecond = true;
}else {
  agecond = false;
}

if (tall>=170){
  tallcond = true;
}else {
  tallcond = false;
}

if (pet[pet.length-1] === "y"){
  petcond = true;
}else {
  petcond =  false;
}

if (namecond && agecond && tallcond && petcond ) {
  console.log("Welcome Spy");
}else {
  console.log("nothing to see here");
}
