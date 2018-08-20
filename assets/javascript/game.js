$(document).ready(function () {

//list variables
	//selects random number + is between 19 - 120 
var targetNumber = Math.floor(Math.random() * 101 + 19);
var userNumber= 0;
var winCount = 0;
var lossCount = 0;
var images = ["./assets/images/gem1.png",
"./assets/images/gem2.png",
"./assets//images/gem3.png",
"./assets/images/gem4.png"
]


//get elements

$('#target-number').text(targetNumber); 
$('#current-total').text(userNumber); 
$('#win-count').text(winCount); 
$('loss-count').text(lossCount); 

//establish targetNumber
$("#target-number").text(targetNumber);
console.log(targetNumber); 

//create random number for each gem; between 1 - 12
var gem1 = Math.floor(Math.random() * 11 + 1); 
var gem2 = Math.floor(Math.random() * 11 + 1);
var gem3 = Math.floor(Math.random() * 11 + 1);
var gem4 = Math.floor(Math.random() * 11 + 1);


//reset game function
function resetGame () {

	targetNumber = Math.floor(Math.random() * 101 + 19);
	console.log (userNumber);
	$('#target-number').text(targetNumber); 
	gem1 = Math.floor(Math.random() * 11 + 1); 
	gem2 = Math.floor(Math.random() * 11 + 1);
	gem3 = Math.floor(Math.random() * 11 + 1);
	gem4 = Math.floor(Math.random() * 11 + 1);
	userNumber = 0;
	$("#current-total").text(userNumber); 

}

// display wins
function wins() {
	alert ("You won!"); 
	winCount++; 
	$('#win-count').text(winCount);
	resetGame(); 
}

//display losses
function losses() {
	alert ("You lost :("); 
	lossCount++; 
	$('#loss-count').text(lossCount);
	resetGame(); 
}

//pick random number


//have gems equal random numbers



// crystal click functions

$('#gem1').on('click', function () {
	userNumber = userNumber + gem1; 
	console.log("Gem 1 value: " + userNumber);
	$("#current-total").text(userNumber); 

	if (userNumber === targetNumber) {
		wins(); 
	}

	else if (userNumber >= targetNumber) {
		losses(); 
	}
 
}); 


$('#gem2').on('click', function () {
	userNumber = userNumber + gem2; 
	console.log("Gem 1 value: " + userNumber);
	$("#current-total").text(userNumber); 

	if (userNumber === targetNumber) {
		wins(); 
	}

	else if (userNumber >= targetNumber) {
		losses(); 
	}
 
}); 

$('#gem3').on('click', function () {
	userNumber = userNumber + gem3; 
	console.log("Gem 1 value: " + userNumber);
	$("#current-total").text(userNumber); 

	if (userNumber === targetNumber) {
		wins(); 
	}

	else if (userNumber >= targetNumber) {
		losses(); 
	}
 
}); 

$('#gem4').on('click', function () {
	userNumber = userNumber + gem4; 
	console.log("Gem 1 value: " + userNumber);
	$("#current-total").text(userNumber); 

	if (userNumber === targetNumber) {
		wins(); 
	}

	else if (userNumber >= targetNumber) {
		losses(); 
	}
 
}); 

$('#gem1').on('click', function () {
	userNumber = userNumber + gem1; 
	console.log("Gem 1 value: " + userNumber);
	$("#current-total").text(userNumber); 

	if (userNumber === targetNumber) {
		wins(); 
	}

	else if (userNumber >= targetNumber) {
		losses(); 
	}
 
}); 




//crystal click function
// $("#gem1").on("click", function() {

// 	userNumber += 1; 
// 	$("#current-total").text(userNumber); 

// 	if (userNumber === targetNumber) {
// 		alert("You win!");
// 		winCount ++; 
// 		$("#win-count").text(winCount); 
// 	}

// 	else if (userNumber >= targetNumber) {
// 		alert("You lose!"); 
// 		lossCount ++; 
// 		$("#loss-count").text(lossCount); 
// 	}

// }); 

}); 