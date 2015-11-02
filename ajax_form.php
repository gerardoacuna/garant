<?php
	//hide errors
	error_reporting(0);

	//wait a second
	sleep(1);

	//your email
	$to =  "pruebas@garant.mx";

	//message subject
	$subject = "Message from your site.";

	//data from form.
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	//valid message
	if(empty($message) || $message == 'Message') {
		$error = 'Please write a message.';
	}

	//valid email
	if(!preg_match("/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/", $email)) {
		$error = 'Please enter a valid email.';
	}

	//valid name
	if(empty($name) || $name == 'Your name') {
		$error = 'Please write your name.';
	}

	// there is an error:
	if($error) {
		$result = '<p class="error">'.$error.'</p>';
	} else {
		//message text
		$body = "Someone has sent a email from your site:\r\n";
		$body .= "Name: ".$name."\r\n";
		$body .= "Email: ".$email."\r\n";
		$body .= "Message: ".$message."\r\n";

		//headers
		$headers = "From: ".$email."\r\n";

		//try to send
		if(mail($to, $subject, $body, $headers)) {
			$result = '<p class="success">Menseje enviado. Gracias por contactarnos.</p>';
		} else {
			$result = '<p class="error">Lo sentimos, el mensaje no pudo ser enviado.</p>';
		}
	}

	//output
	echo $result;
?>
