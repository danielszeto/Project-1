console.log("linked");

// Variables
	var scoreCounter = 0;
	var bankOfWords = ["Yellow","Green","Blue","Purple","Black","Teal","Violet","Brown","Gray","Magenta","Indigo"];
	var randWord;
	var correctAnswer = [];
	var guesses = [];
	var currentWord;
	var checkCorrect;
	var guessesInput = [];
	var condensedArray = [];
	
$(document).ready(function() {

	$('#startgame').on("click",startGame);
	$('#resetgame').on("click",resetGame);
 
  
});

	function startGame() {
		placeword();
		timer();
		$('#startgame').hide();

		for (var i = 0; i < 2; i++) {
	    	
	    	randWord = substitute(randWord);
			correctAnswer.push(letterTaken); //push the letter in the correct Answer array
		    console.log("correctAnswer:" + correctAnswer, "letterTaken:" + letterTaken);

		}

		$('body').on('click','.letter', function(e) {
			var letterIGuessed = $(this).html(); // this is the letter that was clicked

	        if (condensedArray.length === 0 ) {
				
				placeword();
	        	
	        }
	        else {
	        	//check if letter is correct
	        	checkIfRightWord(letterIGuessed);
	        }


		});

		$('#word').append("<p>" + (randWord.split()) + "</p>");

		condenseArray(guessesInput);

	}

	function checkIfRightWord(guessedLetter) {
				
		$('#word').fadeOut("normal".empty()


			if (guessedLetter === condensedArray[0]) {
				scoreCounter++;
				condensedArray.shift();
				
				if(condensedArray.length===0){
					//get next word here
					var newWord = placeword();
					guessesInput=[];
					correctAnswer=[];
					$('#letters').empty();
					for (var i = 0; i < 2; i++) {
				    	randWord = substitute(newWord);
						correctAnswer.push(letterTaken);
					}
					condenseArray(guessesInput);

				}
			}

			else { scoreCounter--;}

				$('#score').html(scoreCounter);

				$('#word').append("<p>" + (randWord.split()) + "</p>");



	}


	//refreshes the page so user can start new game
	function resetGame() {
		
		location.reload();

	}
	//add a timer 
		//starts the timer at count "x" seconds 
	function timer() {
		var count = 20, timer = setInterval(function() {
	    $("#timer").html(count);
	    count--;
	    if(count === -1) {
	    	clearInterval(timer);

	    alert("Gameover!")

	    }
	}, 1000);
	}

	//add words to appear on page

	function placeword() {

		// var randWord;
		var quotes = bankOfWords;
		var letterTaken;
		var randomNumber=Math.floor( Math.random() * quotes.length );

		// //selects a random string from the array
	    randWord = quotes[randomNumber];
	    currentWord = randWord;
	    bankOfWords.splice(randomNumber, 1);
	    
	    return randWord;
    }

	//replaces the letter from word and substitute it with blank
	function getRandomLetter() {
			    var  replaceWith= " "; 
			    var randPos = Math.floor(Math.random()*replaceWith.length); 
				return replaceWith.charAt(randPos); 
	}

	//Taking a random letter from the word and called getRandLetter to replace the letter with ""
	function substitute(randWordParam) { 
    	console.log('calling substitute');
	    var subPos = Math.floor(Math.random()*randWordParam.length);
   			    
	    letterTaken = randWord[subPos];

	    if (letterTaken == " ") {
	    	var subPos = Math.floor(Math.random()*randWordParam.length);
	    	letterTaken = randWord[subPos];
	    }

	    guessesInput[subPos]=letterTaken;

	    $('#letters').append("<p class='letter'>" + letterTaken + "</p>");
	    return randWord.substring(0, subPos) + getRandomLetter() + randWord.substring(subPos+1); 
	} 
		
	//for loop
	//if (guessesInput[i]), newArray.push{guessesInput[i])
	function condenseArray(array){
		var i;
		for (i = 0; i <= guessesInput.length; i++) {
			if (guessesInput[i]) { 
				condensedArray.push(guessesInput[i]);
			}

		}
	}


