$(document).ready(function() {
	//console.log("hello");

//variables

var scoreCounter;
var bankOfWords = ['Daniel','Szeto','Yellow','elephant'];
placeword();
timer();

//add an event listener to start button
$('#startgame').on("click",function(){
	console.log("hello");
});

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

	//selects a random string from the array
    randno = quotes[Math.floor( Math.random() * quotes.length )];

    // var wordFinal = randno;

    for (var i = 0; i < 2; i++) {
    	
    	str = substitute(randno);

    

	    function substitute(str) { 
		    var pos = Math.floor(Math.random()*str.length); 
		    var letterTaken = str[pos];
		    console.log(letterTaken);
		    $('#letters').append("<p>" + letterTaken + "</p>");
		    return str.substring(0, pos) + getRandomLetter() + str.substring(pos+1); 

	} 

		function getRandomLetter() { 
		    var  letters= "_"; 
		    var pos = Math.floor(Math.random()*letters.length); 
			return letters.charAt(pos); 

		    
		}

	}
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