console.log("linked");
$(document).ready(function() {
	//console.log("hello");

	// Variables

	var scoreCounter;
	var bankOfWords = ['Daniel','Szeto','Yellow','Green','January','February'];
	var randWord;
	var correctAnswer = [];
	var guesses = [];
	var currentWord;
	var checkCorrect;
	



	//starts the game 
		//initizes placeword and timer functions
		//hides the start button affer click
	function startGame() {
		placeword();
		timer();
		$('#startgame').hide();
		


	}

	//refreshes the page so user can start new game
	function resetGame() {
		
		location.reload();

	}


	//add an event listener to start button
	$('#startgame').on("click",startGame);
		// console.log("hello");
	// $('#startgame').unbind("click",startGame);

	//add an event listener to reset button
	$('#resetgame').on("click",resetGame);


	//add a timer 
		//starts the timer at count "x" seconds 
	function timer() {
		var count = 4, timer = setInterval(function() {
	    $("#timer").html(count);
	    count--;
	    if(count === -1) {
	    	clearInterval(timer);

	    }
	}, 1000);
	}

	//add words to appear on page

	function placeword() {

		// var randWord;
		var quotes = bankOfWords;
		

		// //selects a random string from the array
	    randWord = quotes[Math.floor( Math.random() * quotes.length )];
	    currentWord = randWord;


	    for (var i = 0; i < 2; i++) {
	    	
	    	randWord = substitute(randWord);
	    	var lettersTaken;

		    function substitute(randWord) { 
			    var subPos = Math.floor(Math.random()*randWord.length);
			    lettersTaken = randWord[subPos];
			    console.log(lettersTaken);
			    $('#letters').append("<p class='letter'>" + lettersTaken + "</p>");
			    return randWord.substring(0, subPos) + getRandomLetter() + randWord.substring(subPos+1); 
		} 

			function getRandomLetter() {
			    var  replaceWith= " "; 
			    var randPos = Math.floor(Math.random()*replaceWith.length); 
			    console.log(randWord[randPos ]);
				return replaceWith.charAt(randPos ); 
			}

				correctAnswer.push(lettersTaken);
			    console.log(correctAnswer, lettersTaken);

		}

			$('.letter').on('click', function(e) {
		        guesses.push(e.target.innerHTML); 
		        $(this).remove();

		        console.log(guesses);
		        $();
 
	    	});

	    	// CHECK TO SEE IF CORRECT ANSWER LOGIC

	    	// checkCorrect = randWord.split("");
	   		
	   		// var i;
	   		// for (i = 0; i < randWord.length; i++) {
	   		// 	var x;
	   		// 	for (x = 0; x < guesses.length; x++) {
	   		// 		if (checkCorrect[i] === " ") {
	   		// 			checkCorrect[i] = guesses[x];
	   		// 			break;
	   		// 		}
	   		// 	}
	   		// }

	   		// if (checkCorrect.join("") === currentWord) {
	   		// 	alert('YAY');
	   		// }



		$('#word').append("<p>" + (randWord.split()) + "</p>");



		console.log(randWord);
		console.log(currentWord);









		


	// $('#letters').append("<p>" + letterTaken + "</p>");


			// function removeRandomLetter(str) {
			//     var pos = Math.floor(Math.random()*str.length);
			//     return str.substring(0, pos)+str.substring(pos+1);
			// }

		

		
	    // console.log(randWord);

		
		// var randomWord;
		
		// for (var i = 0, i < bankOfWords.length, i++) {

		// 	$("#word").append("<p>" + "randomWord" + "</p>")
		// };

		//var current = "Daniel"
		//randWord = "D_nie_"

		//charAt

		//if the letter clicked matches "a", & if the next letter clicked matches "i", 
		//&& if the next later matches" e", correct
		//if not, incorrect



	}




});


