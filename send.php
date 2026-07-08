
<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if (!error_get_last()) {

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $question1 = $_POST['question1'];
    $question2 = $_POST['question2'];
    $question3 = $_POST['question3'];
    $question4 = $_POST['question4'];
    $question5 = $_POST['question5'];
    $question6 = $_POST['question6'];
    $question7 = $_POST['question7'];
    $question8 = $_POST['question8'];
    $question9 = $_POST['question9'];
    $question10 = $_POST['question10'];

    $response1 = $_POST['response1'];
    $response2 = $_POST['response2'];
    $response3 = $_POST['response3'];
    $response4 = $_POST['response4'];
    $response5 = $_POST['response5'];
    $response6 = $_POST['response6'];
    $response7 = $_POST['response7'];
    $response8 = $_POST['response8'];
    $response9 = $_POST['response9'];
    $response10 = $_POST['response10'];

    $email_template = "tmp/template_mail.html";

    $title = "Заявка с сайта";
    $body = file_get_contents($email_template);
	$body = str_replace('%name%', $name, $body);
	$body = str_replace('%phone%', $phone, $body);

	$body = str_replace('%question1%', $question1, $body);
	$body = str_replace('%question2%', $question2, $body);
    $body = str_replace('%question3%', $question3, $body);
	$body = str_replace('%question4%', $question4, $body);
	$body = str_replace('%question5%', $question5, $body);
	$body = str_replace('%question6%', $question6, $body);
	$body = str_replace('%question7%', $question7, $body);
	$body = str_replace('%question8%', $question8, $body);
	$body = str_replace('%question9%', $question9, $body);
	$body = str_replace('%question10%', $question10, $body);

	$body = str_replace('%response1%', $response1, $body);
	$body = str_replace('%response2%', $response2, $body);
    $body = str_replace('%response3%', $response3, $body);
	$body = str_replace('%response4%', $response4, $body);
	$body = str_replace('%response5%', $response5, $body);
	$body = str_replace('%response6%', $response6, $body);
	$body = str_replace('%response7%', $response7, $body);
	$body = str_replace('%response8%', $response8, $body);
	$body = str_replace('%response9%', $response9, $body);
	$body = str_replace('%response10%', $response10, $body);
       
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    
    $mail->Host       = 'smtp.mail.ru'; // SMTP server of your mail
    $mail->Username   = 'admin@mail.ru'; // Email login
    $mail->Password   = 'XXXXXXXXXXXXX'; // Email password for third-party applications
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('admin@mail.ru', 'Администрация'); // Email address and sender's name
    
    $mail->addAddress('admin@mail.ru');   
    
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "The message has been sent successfully!";
    } else {
        $data['result'] = "error";
        $data['info'] = "The message was not sent. Error sending the email!";
        $data['desc'] = "The reason for the error: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "An error in the code";
    $data['desc'] = error_get_last();
}

header('Content-Type: application/json');
echo json_encode($data);

?>