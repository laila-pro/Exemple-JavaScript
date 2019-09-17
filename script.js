var myImage =   document.getElementById('myImage');

/*function turnOn() {

myImage.src='pic_bulbon.gif';
}
function turnOff() {
myImage.src='pic_bulboff.gif';
}*/

function onOff() {
  if (myImage.src=='https://www.w3schools.com/js/pic_bulboff.gif'){
     myImage.src='https://www.w3schools.com/js/pic_bulbon.gif';
  } else {
    myImage.src='https://www.w3schools.com/js/pic_bulboff.gif';
  }
}
var state=false;
function toggleLight() {
  state ? myImage.src='pic_bulboff.gif' : myImage.src='pic_bulbon.gif';
  state=!state;
}
