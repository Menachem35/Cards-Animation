$(document).ready(function(){
	var isAnimated = true; // Boolean variable helper to know if the animation was triggered
			
	//once hover on card 1 trigger animation
	$('.card-1').on('mouseenter', function () { 
		$('.container').toggleClass('container-cards'); // switch between flex - row / column 
		$('.text-area').toggleClass('text-area-cards');
		$('.cards-container').toggleClass('cards-container-cards');
		$('.blueButton').toggleClass('buttonCards');
		$('#bodyText').toggle();
		$('#mainHeadingCards').toggle();
		$('.card-1').toggleClass('card-1-animate');
		$('.card-2').toggleClass('card-2-animate');
		$('.card-3').toggleClass('card-3-animate');
		$('.card-4').toggleClass('card-4-animate');
				
		if (isAnimated) {
			$('img#card_1').attr({
				'src': 'img/screen-2/Card 1.png'
			});
			$('.card_number').css({'top': '25%', 'left': '22%'}); // After animation (screen 2)
		}
		if (!isAnimated) {
			$('img#card_1').attr({
				'src': 'img/Card 1.png'
			});	
			$('.card_number').css({'top': '38%', 'left': '35%'}); // After animation (screen 2)			
		}
				
		if (isAnimated) {
			$('img#card_2').attr({
				'src': 'img/screen-2/Card 2.png'
			});
			$('.card_number_2_screen2').css({'top': '36%', 'left': '55%', 'display': 'block'}) // After animation (screen 2)
		}
		if (!isAnimated) {
			$('img#card_2').attr({
				'src': 'img/Card 2.png'
			});
			$('.card_number_2_screen2').css('display', 'none');
		}
				
		if (isAnimated) {
			$('img#card_3').attr({
				'src': 'img/screen-2/Card 3.png'
			});
			$('.card_number_3_screen2').css({'top': '40%', 'left': '55%', 'display': 'block'}); // After animation (screen 2)
		}
		if (!isAnimated) {
			$('img#card_3').attr({
				'src': 'img/Card 3.png'
			});
			$('.card_number_3_screen2').css('display', 'none');
		}
				
		if (isAnimated) {
			$('img#card_4').attr({
				'src': 'img/screen-2/Card 4.png'
			});
			$('.card_number_4_screen2').css({'top': '35%', 'left': '30%', 'display': 'block'}) // After animation (screen 2)
		}
		if (!isAnimated) {
			$('img#card_4').attr({
				'src': 'img/Card 4.png'
			});
			$('.card_number_4_screen2').css('display', 'none');
		}
				
		if (isAnimated) { //when hover on card
			$('#mainHeadingCards').css('display', 'block');
			$('#mainHeadingImg').css('display', 'none');
			$('.text-area').css({'padding-top':'30px', 'padding-left': '20px'});
		}
		else if (!isAnimated) // back to normal - original state
		{
			$('#mainHeadingCards').css('display', 'none');
			$('#mainHeadingImg').css('display', 'block');
			$('.text-area').css({'padding-top':'80px', 'padding-left': '0'});					
		}
				
		isAnimated = !isAnimated; // back to normal - reset the boolean helper
	});						
			
});
