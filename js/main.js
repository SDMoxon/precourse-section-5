$(document).ready(function(){
	var currentScore = 0
	document.getElementById("currentScore").innerHTML = currentScore;
	$('.wrong').click(function(){
    	$(this).addClass('incorrect');


    	// prevents further interaction via the click function.

    	$(this).siblings().off('click');
    	$(this).off('click');


	});

	$('.right').click(function(){
    	$(this).addClass('correct');


    	// prevents further interaction via the click function.

    	$(this).siblings().off('click');
    	$(this).off('click');

    	// Increase count
   		currentScore += 1

   		document.getElementById("currentScore").innerHTML = currentScore;
	});

});
