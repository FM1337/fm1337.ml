<?php
$name = $_POST['contactName'];
$email = $_POST['email'];
$message = $_POST['comments'];
$formcontent="From: $name \n Message: $message";
$recipient = "fm1337@fm1337.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>