document.querySelector('html').onclick = function(){
	alert('良い...快適 !');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dog.jpg') {
		myImage.setAttribute ('src','images/shydog.jpg');
	} else {
		myImage.setAttribute ('src','images/dog.jpg');
	}
}