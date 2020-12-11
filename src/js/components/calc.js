let buttons = $('.calculator__answer input');
const resSpan = $('#calc-res');
const box = $('.calculator__total-box');
const recomendText = $('.calculator__recomend--inner');

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

	
	if (totalVal > 3) {
		box.removeClass('calculator__total-box--succ');
		box.removeClass('calculator__total-box--warn');
		box.addClass('calculator__total-box--alert');
		recomendText.html('<p>Мои знания и навыки позволят вам добиться поставленных целей.</p><p><b>Предлагаю начать с бесплатной консультации</b></p>')
	}
	else if (totalVal <= 3 && totalVal >= 2) {
		box.removeClass('calculator__total-box--succ');
		box.removeClass('calculator__total-box--alert');
		box.addClass('calculator__total-box--warn');
		recomendText.html('<p>Вы отлично знаете, чего хотите от жизни и я помогу сделать ваши действия прибыльнее.</p><p><b>Предлагаю начать с бесплатной консультации</b></p>');
	}
	else if (totalVal < 2){
		box.removeClass('calculator__total-box--alert');
		box.removeClass('calculator__total-box--warn');
		box.addClass('calculator__total-box--succ');
		recomendText.html('<p>Похоже у вас все хорошо и без меня.</p><p><b>Но я буду рад помочь вашим коллегам и друзьям.</b></p>')
	}

	resSpan.text(totalVal);
})
