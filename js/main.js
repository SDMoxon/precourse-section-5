$(document).ready(function(){
	var currentScore = 0
	document.getElementById("currentScore").innerHTML = currentScore;
	$('.wrong').click(function(){
    	$(this).addClass('incorrect');
    	
    	//removes trigger classes which aren't needed anymore.
    	$(this).removeClass('wrong');
    	$(this).siblings().removeClass('wrong right');
    	

    	// prevents further interaction via the click function. 

    	$(this).siblings().off('click');
    	$(this).off('click');

   		
	});

	$('.right').click(function(){
    	$(this).addClass('correct');
    	
    	//removes trigger classes which aren't needed anymore.
    	$(this).removeClass('wrong');
    	$(this).siblings().removeClass('wrong right');
    	

    	// prevents further interaction via the click function. 

    	$(this).siblings().off('click');
    	$(this).off('click');

    	// Increase count
   		currentScore += 1

   		document.getElementById("currentScore").innerHTML = currentScore;
	});
	
});