let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ceebit-robot-avi.png') {
      myImage.setAttribute('src','images/ceebit-robot-avi.png');
    } else {
      myImage.setAttribute('src','images/ceebit-robot-avi-2.png');
    }
}
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ceebit-robot-avi.png') {
      myImage.setAttribute('src','images/ceebit-robot-avi-2.png');
    } else {
      myImage.setAttribute('src','images/ceebit-robot-avi.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ceebits are cool, ' + myName;
      }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ceebits are cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
