<?php
/*
* Name: PHP Ajax
* Ver: 2.0.0
* Autor: Alex Kuimov, Alex Bikov
*/



/********************************Settings*****************************************/


$to = 'ab3635852@gmail.com';
$to1 = 'orders@stdkit.ru';
$from = 'robots@xn------6cdbciescapvf0a8bibwx0a1bu.xn--p1ai';
$from_name = 'Kvartz';
$subject = 'Заявка с сайта';



/*******************************Functions****************************************/



function multi_attach_mail($to, $subject, $message, $senderMail, $senderName)
{

	$from = $senderName . " <" . $senderMail . ">";
	$headers = "From: $from";
	$semi_rand = md5(time());
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
	$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
	$message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
		"Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";

	$message .= "--{$mime_boundary}--";
	$returnpath = "-f" . $senderMail;
	$mail = @mail($to, $subject, $message, $headers, $returnpath);

	if ($mail) {
		return TRUE;
	} else {
		return FALSE;
	}
}



/******************************Actions******************************************/



if (isset($_POST['data']) && !empty($_POST['data'])) {
	$data = strip_tags($_POST['data']);

	$data = stripslashes($data);
	$data = json_decode($data);
	$amoTitle 	= $data->hidden[0]->value;
	$mailText = '';

	foreach ($data as $key => $value) {
		foreach ($value as $k => $val) {
			if ($val->text == 'Форма' || $val->text == 'utm_medium' || $val->text == 'utm_campaign' || $val->text == 'utm_content' || $val->text == 'utm_source') {
				if ($val->value == 'Заказать звонок') {
					$amoTitle = 'Попросили перезвонить';
				}
				if ($val->value == 'Заказать услугу') {
					$amoTitle = 'Хотят заказать услугу';
				}
				if ($val->value == 'Узнать подробнее об услуге') {
					$amoTitle = 'Попросили перезвонить';
				}
				if ($val->value == 'Узнать больше о нас') {
					$amoTitle = 'Хотят узнать больше о нас';
				}
				if ($val->value == 'Какая услуга вам нужна?') {
					$amoTitle = 'Получили подборку вариантов';
				}
				if ($val->value == 'Задайте нам вопрос') {
					$amoTitle = 'Задан вопрос';
				}
			} else {
				$mailText .= '<p><strong> ' . $val->text . ' </strong>' . $val->value . ' </p> ';
			}
		}
	}





	$utm_source 	= $data->utm_source[0]->value;
	$utm_medium 	= $data->utm_medium[0]->value;
	$utm_campaign 	= $data->utm_campaign[0]->value;
	$utm_content 	= $data->utm_content[0]->value;

	// $mailText	=  strip_tags($mailText);
	$amoEmail 	= '';
	$send_email = multi_attach_mail($to, $subject, $mailText, $from, $from_name);
	$send_email = multi_attach_mail($to1, $subject, $mailText, $from, $from_name);
}
