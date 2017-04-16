<?php

$subject = "Баскетбол (белый): Новая заявка";
$header = "From: \"Заявка\" <robot@no.email>\n";
$header .= "Content-type: text/plain; charset=\"utf-8\"";
$to = "metalmilk@inbox.ru";
$message = "Новая заявка.\n\nИмя: {$_POST['fio']}\nТелефон: {$_POST['phone']}\nФорма: {$_POST['formtype2']}\n\nMail Bot\n\n\n";
mail ($to, $subject, $message, $header);

$subject = "Баскетбол (белый): Новая заявка";
$header = "From: \"Заявка\" <robot@no.email>\n";
$header .= "Content-type: text/plain; charset=\"utf-8\"";
$to = "slamschool.ru@yandex.ru";
$message = "Новая заявка.\n\nИмя: {$_POST['fio']}\nТелефон: {$_POST['phone']}\nФорма: {$_POST['formtype2']}\n\nMail Bot\n\n\n";
mail ($to, $subject, $message, $header);

?>