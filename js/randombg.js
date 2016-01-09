$(function() {
	var data = [
	{"lname": "Carnap", "fname": "Rudolf", "source": "The Unity of Science", 
	"quote": '"Logic is the last scientific ingredient of Philosophy; its extraction leaves behind only a confusion of non-scientific, pseudo problems."'},

	{"lname": "Frege", "fname": "Gottlob", "source": "Begriffsschrift", 
	"quote": "If the task of philosophy is to break the domination of words over the human mind... then my concept notation, being developed for these purposes, can be a useful instrument for philosophers... I believe the cause of logic has been advanced already by the invention of this concept notation."},
	
	{"lname": "Wittgenstein", "fname": "Ludwig", "source": "Tractatus Logico-Philosophicus", 
	"quote": "The object of philosophy is the logical clarification of thoughts."}
	]
	var $info = $('.info');
	var $author = $('#author');
	var $quote = $('#quote');
	var attrbeginning = "background: linear-gradient(0deg, #333E48, transparent ), linear-gradient(180deg, #333E48, transparent), radial-gradient(circle, transparent 10%, #787C7F 40%, #333E48 80%), rgba(17,67,85, .5) url(img/"
	var attrending = ".png) no-repeat center"
	var seed = Math.floor(Math.random()* 3) // get a random number from 0 to 2


	$info.attr("style", attrbeginning + data[seed].lname.toLowerCase() + attrending);
	$author.html("- " + data[seed].fname + " " + data[seed].lname + ", <i>" +data[seed].source + "</i>");
	$quote.html(data[seed].quote);


})

