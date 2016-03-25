$(function(){
	var $content = $(".content");
	var $model = $("#model");
	var $confirm = $("#confirm");
	var $interaction = $("#interaction");
	var $instruction = $("#instruction");
	var $reload = $("#reload");
	var $retry = $("#retry");



	function drawRandom(set){
		return 	set[Math.floor(Math.random()* set.length)];
	}

	function makeModel(){
		

	}

	function generatePossibilities(obj, place){
		var possibility = [];
		for (var i = 0; i < place; i++){
			for (var j = 0; j < obj.length; j++){
				possibility.push(obj[j]);
			}
		}
		console.log(possibility);
		return makeExtension(obj, possibility, place);

	}

	function makeExtension(obj, possibility, place){
		if (place == 1){
			return possibility;
		}else{
			while ()

			 for (var i = 0; i < obj.length;i++){
			 	for (var j = 0;j<possibility.length/obj.length; j++){
			 		possibility[j] += obj[i];
			 		console.log(possibility[j])

			 	}
			 }
			 place--;
			 console.log(place);
			 makeExtension(obj, possibility, place);
			}
		}
	

/******Begining Parameter of the Game *///////

	var predicates = ["P", "Q"];
	var objects = ["a", "b"]
	console.log(objects);
	console.log(generatePossibilities(objects, 3));
})