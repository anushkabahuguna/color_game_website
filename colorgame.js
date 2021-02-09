var numsquares = 6;
var colors = generatecolors(6);
var messagedisplay = document.querySelector('#message');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colordisplay');
var resetbutton = document.querySelector('#reset');
var pickedColor = randomcolor();
var easy = document.querySelector('#easybtn');
var hard = document.querySelector('#hardbtn');

easy.addEventListener('click', function() {
	easy.classList.add('selected');
	hard.classList.remove('selected');
	colors = generatecolors(3);
	pickedColor = randomcolor();
	numsquares = 3;

	colordisplay.textContent = pickedColor;
	resetbutton.textContent = 'New Colors';
	messagedisplay.textContent = '';
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) squares[i].style.backgroundColor = colors[i];
		else squares[i].style.display = 'none';
	}

	document.querySelector('h1').style.backgroundColor = 'steelblue';
});

hard.addEventListener('click', function() {
	easy.classList.remove('selected');
	hard.classList.add('selected');
	numsquares = 6;

	resetbutton.textContent = 'New Colors';
	messagedisplay.textContent = '';
	colordisplay.textContent = pickedColor;

	colors = generatecolors(6);
	pickedColor = randomcolor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}

	document.querySelector('h1').style.backgroundColor = 'steelblue';
});

resetbutton.addEventListener('click', function() {
	resetbutton.textContent = 'New Colors';
	messagedisplay.textContent = '';

	colors = generatecolors(numsquares);
	pickedColor = randomcolor();
	colordisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	document.querySelector('h1').style.backgroundColor = 'steelblue';
});
colordisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', function() {
		var clickedcolor = this.style.backgroundColor;

		if (clickedcolor === pickedColor) {
			messagedisplay.textContent = 'Correct';
			for (var i = 0; i < squares.length; i++) squares[i].style.backgroundColor = pickedColor;
			document.querySelector('h1').style.backgroundColor = pickedColor;
			resetbutton.textContent = 'Play Again?';
		} else {
			this.style.backgroundColor = '#232323';
			messagedisplay.textContent = 'Try Again';
		}
	});
}

function randomcolor() {
	var x = Math.floor(Math.random() * colors.length);
	return colors[x];
}
function generatecolors(t) {
	// t is the length of array
	var arr = [];

	for (var d = 0; d < t; d++) {
		var r1 = Math.floor(Math.random() * 256);
		var r2 = Math.floor(Math.random() * 256);
		var r3 = Math.floor(Math.random() * 256);

		arr.push('rgb(' + r1 + ', ' + r2 + ', ' + r3 + ')');
	}

	return arr;
}
