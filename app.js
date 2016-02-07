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
	//console.log("hello");
	
	

	//initializes startGame function when start button is clicked
	//uses the .one() method to disable start button after initial click
	$('#startgame').one ("click", startGame);
		
	

		// console.log("hello");

	//Resets game when reset button is clicked
	$('#resetgame').on("click",resetGame);
		
		
 
});

//starts the game 
		//initializes placeword and timer functions
		//hides the start button affer click
	function startGame( ) {
		placeword();
		timer();
		/*$('#startgame').hide();*/

		


		//loops over the word twice
		for (var i = 0; i < 2; i++) {
	    	
	    	randWord = substitute(randWord);
			correctAnswer.push(letterTaken); //push the letter in the correct Answer array
		    console.log("correctAnswer:" + correctAnswer, "letterTaken:" + letterTaken);

		}

		$('body').on('click','.letter', function(e) {
			//guesses[index] = e.target.innerHTML
			var letterIGuessed = $(this).html(); // this is the letter that was clicked
	        // guesses.push($(this).html()); 
	        // console.log(this);
	        // $(this).remove();
	        // console.log(guesses);
	        //compare guesses to condensedArray
	        //if same, game won
	        console.log(guessesInput);
	        console.log("daniel this is what is left:",condensedArray);
	        if (condensedArray.length === 0 ) {
	        	//get next word
	        	// console.log('function is working');
	        	placeword();
	        	
	        }
	        else {
	        	//check if letter is correct
	        	checkIfRightWord(letterIGuessed);
	        }


		});

		$('#word').append("<p>" + (randWord.split()) + "</p>");

		condenseArray(guessesInput);
		// console.log("condensed array " +condensedArray);

	}



			function checkIfRightWord(guessedLetter) {
				$('#word').empty()


			if (guessedLetter === condensedArray[0]) {
				scoreCounter++;
				condensedArray.shift();
				console.log("this is after it is removed", condensedArray);
				if(condensedArray.length===0){
					//get next word here
					var newWord = placeword();
					guessesInput=[];
					correctAnswer=[];
					console.log("this is the new word",newWord);
					$('#letters').fadeOut().empty();
					for (var i = 0; i < 2; i++) {
				    	randWord = substitute(newWord);
						correctAnswer.push(letterTaken);
					    console.log("correctAnswer:" + correctAnswer, "letterTaken:" + letterTaken);
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

	    $('#word').append('<span>' + 'GAMEOVER' + '</span>');
	    $('#word').css("border","0px solid #f05131");



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
	    console.log('random word: ', randWord);
	    currentWord = randWord;
	    console.log("bank before splice", bankOfWords);
	    bankOfWords.splice(randomNumber, 1);
	    console.log("bank after splice", bankOfWords);
	    return randWord;
    }



	//replaces the letter from word and substitute it with blank
	function getRandomLetter() {
			    var  replaceWith= " "; 
			    var randPos = Math.floor(Math.random()*replaceWith.length); 
			    console.log(randWord[randPos]);
				return replaceWith.charAt(randPos); 
	}

	//Taking a random letter from the word and called getRandLetter to replace the letter with ""
	function substitute(randWordParam) { 
    	console.log('calling substitute');
    	//unless 1 
	    var subPos = Math.floor(Math.random()*randWordParam.length);
        console.log('random index: ', subPos);			    
	    letterTaken = randWord[subPos];

	    if (letterTaken == " ") {
	    	var subPos = Math.floor(Math.random()*randWordParam.length);
	    	letterTaken = randWord[subPos];
	    }

	    guessesInput[subPos]=letterTaken;
	    console.log("letterTaken inside substitute:"+letterTaken);
	    console.log(guessesInput, typeof guessesInput);

	    $('#letters').fadeIn().append("<p class='letter'>" + letterTaken + "</p>");
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


