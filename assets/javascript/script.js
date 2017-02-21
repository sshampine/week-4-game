var target = Math.floor((Math.random()*120) + 19);
var total = 0;
var wins = 0;
var loss = 0;
$("#match-number").html(target);
console.log(target);

var guess=[];
var gems=["assets/images/diamond.jpg", "assets/images/ruby.jpg", "assets/images/emerald.jpg", "assets/images/sapphire.jpg"];
var gemNum = [];



for (var i=0; i<4; i++) {
	gemNum.push(Math.floor(Math.random()*12)+1);
}
console.log(gemNum);
 /*for (var i=0; i<4; i++) {
	var randNum = Math.floor(Math.random()*12);
	guess.push(randNum);
} 
	for (var i=0; i<randNum.length; i++) {
		var gem = $("<img>");
		gem.addClass("crystal-images");
		gem.attr("src", gems[i]);
		gem.attr(randNum[i]);
		$("#crystals").append(gem);
	}
console.log(guess); */ 
for (var i=0; i < gems.length; i++){

var gem = $("<img>");
gem.addClass("crystal-images");
gem.attr("src", gems[i]);
gem.attr("gemvalues", gemNum[i]);
$("#crystals").append(gem); 
};

$(".crystal-images").on("click", function() {
var value = ($(this).attr("gemvalues"));
value = parseInt(value);
total += value;
$("#total-area").html(total);

if (total === target) {
	wins ++;
	$("#notice").html("Winner!")
	$("#win").html(wins);
}
else if(total > target) {
	loss ++;
	$("#loss").html(loss);
}

});