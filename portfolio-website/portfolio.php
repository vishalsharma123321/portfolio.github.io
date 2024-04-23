<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Enter Your Email Address
    $to = 'vishalsharma22120003@gmail.com';

    $headers = "From: ".$name." <".$email.">";

    //send email
    mail($to,$subject,$message,$headers);
}
?>
