let buttons = $('.calculator__answer input');
const resSpan = $('#calc-res');
const box = $('.calculator__total-box');

let totalVal = 0;

buttons.on('click', function(){
	val1 = $('.calculator__answer input[name="answer-1"]:checked').val();
	if (isNaN(val1)) val1 = 0;
	val2 = $('.calculator__answer input[name="answer-2"]:checked').val();
	if (isNaN(val2)) val2 = 0;
	val3 = $('.calculator__answer input[name="answer-3"]:checked').val();
	if (isNaN(val3)) val3 = 0;
	val4 = $('.calculator__answer input[name="answer-4"]:checked').val();
	if (isNaN(val4)) val4 = 0;
	val5 = $('.calculator__answer input[name="answer-5"]:checked').val();
	if (isNaN(val5)) val5 = 0;
	val6 = $('.calculator__answer input[name="answer-6"]:checked').val();
	if (isNaN(val6)) val6 = 0;
	totalVal = Number(val1) + Number(val2) + Number(val3) + Number(val4) + Number(val5) + Number(val6);
	// console.log(totalVal);

	
	if (totalVal < 3) {
		box.removeClass('calculator__total-box--succ');
		box.removeClass('calculator__total-box--warn');
		box.addClass('calculator__total-box--alert');
	}
	else if (totalVal >= 3 && totalVal <= 5) {
		box.removeClass('calculator__total-box--succ');
		box.removeClass('calculator__total-box--alert');
		box.addClass('calculator__total-box--warn');
	}
	else if (totalVal > 5){
		box.removeClass('calculator__total-box--alert');
		box.removeClass('calculator__total-box--warn');
		box.addClass('calculator__total-box--succ');
	}

	resSpan.text(totalVal);
})
