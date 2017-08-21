


var targetNumber = 0;
var crystalNumber = [];
var counter = 0;
var winCount = 0;
var loseCount = 0;
//var targetNumber = Math.floor(Math.random() * 120) + 19;

//console.log(targetNumber);
$(document).ready(function(){

function randNumber() {
	targetNumber = Math.floor(Math.random() * 120) + 19;
	$("#random-number").html(targetNumber);
	console.log("new number: " + targetNumber)
	return targetNumber;
};



for (var i = 0; i < 4; i++) {
	var number = Math.floor(Math.random() * 12) + 1
	crystalNumber.push(number);
	console.log(crystalNumber);
	console.log(crystalNumber.length)
}

function updateCrystals() {
for (var i = 0; i < 4; i++) {
	var number = Math.floor(Math.random() * 12) + 1
	crystalNumber.push(number);
	console.log(crystalNumber);
	console.log(crystalNumber.length)
}

for (var j = 0; j < crystalNumber.length; j++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
	imageCrystal.attr("data-crystalValue", crystalNumber[j]);
	$("#crystals").append(imageCrystal);
}
};




for (var j = 0; j < crystalNumber.length; j++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
	imageCrystal.attr("data-crystalValue", crystalNumber[j]);
	$("#crystals").append(imageCrystal);
}
randNumber();
//$("#random-number").html(targetNumber);
console.log("number Check: " + targetNumber);
runGame();

function runGame() {
$(".crystal-image").on("click", function() {
	var crystalValue = ($(this).attr("data-crystalValue"));
	crystalValue = parseInt(crystalValue);
	console.log(crystalValue);

	counter += crystalValue;

	$("#player-score").text(counter);

	if (counter === targetNumber) {
		winCount++;
		$("#win").text(winCount);
		counter = 0
		$("#player-score").text(counter);
		crystalNumber = [];
		$("#crystals").empty();
		randNumber();
		updateCrystals();
		runGame();
		
		
	} else if (counter >= targetNumber) {
		loseCount++
		$('#loss').text(loseCount);
		counter = 0;
		$("#player-score").text(counter);
		crystalNumber = [];
		$("#crystals").empty();
		randNumber();
		updateCrystals();
		runGame();
	}
});}
	

});











