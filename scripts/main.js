var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dog.jpg') {
		myImage.setAttribute ('src','images/shydog.jpg');
	} else {
		myImage.setAttribute ('src','images/dog.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Welcome,' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
}	else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Welcome,' + storedName;
}
myButton.onclick = function() {
	setUserName();
}