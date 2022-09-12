var randomNumber1 = Math.floor((Math.random() * 3)) + 1;
var pickPicture1 = "images/picture"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", pickPicture1);

var randomNumber2 = Math.floor((Math.random() * 3)) + 1;
var pickPicture2 = "images/picture"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", pickPicture2);




if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "first one beats second one";
}
else if ( randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "second one beats first one"
}
else {
  document.querySelector("h2").innerHTML = "draw !"
}
if (randomNumber1==1 && randomNumber2==3){
  document.querySelector("h2").innerHTML = "first one beats second one";
}
else if (randomNumber1==3 && randomNumber2==1) {
  document.querySelector("h2").innerHTML = "second one beats first one";
}
