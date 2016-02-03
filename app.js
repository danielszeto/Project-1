$(document).ready(function() {
	//console.log("hello");

//variables

var scoreCounter;
var bankOfWords = ['Daniel','Szeto','Yellow','Green','January','February'];

function startGame() {
	placeword();
	console.log("linked");
	timer();
	$('#startgame').hide();

	
}
//add an event listener to start button
$('#startgame').on("click",startGame);
	// console.log("hello");
// $('#startgame').unbind("click",startGame);


//add a timer 
function timer() {
	var count = 10, timer = setInterval(function() {
    $("#timer").html(count--);
    if(count == 0) clearInterval(timer);
}, 1000);
}

//add words to appear on page

function placeword() {

	var randno;
	var quotes = bankOfWords;

	// //selects a random string from the array
    randno = quotes[Math.floor( Math.random() * quotes.length )];


    for (var i = 0; i < 3; i++) {
    	
    	randno = substitute(randno);

	    function substitute(randno) { 
		    var pos = Math.floor(Math.random()*randno.length); 
		    var letterTaken = randno[pos];
		    console.log(letterTaken);
		    $('#letters').append("<p>" + letterTaken + "</p>");
		    return randno.substring(0, pos) + getRandomLetter() + randno.substring(pos+1); 
	} 

		function getRandomLetter() { 
		    var  letters= "_"; 
		    var pos = Math.floor(Math.random()*letters.length); 
			return letters.charAt(pos); 

		    
		}

	}

	$('#word').append("<p>" + randno + "</p>");
	console.log(randno); 


// $('#letters').append("<p>" + letterTaken + "</p>");


		// function removeRandomLetter(str) {
		//     var pos = Math.floor(Math.random()*str.length);
		//     return str.substring(0, pos)+str.substring(pos+1);
		// }

	$('#word').append("<p>" + str + "</p>");
	console.log(str); 

	
    // console.log(randno);

	
	// var randomWord;
	
	// for (var i = 0, i < bankOfWords.length, i++) {

	// 	$("#word").append("<p>" + "randomWord" + "</p>")
	// };



}
});


