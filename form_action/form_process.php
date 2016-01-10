<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'noreply@briansbier.com'; 
    $to = 'briansbier@gmail.com'; 
    $subject = 'Hello';

mail ($name, $email, $subject $message, "From:"$from);

print "Your message has been sent";
?>