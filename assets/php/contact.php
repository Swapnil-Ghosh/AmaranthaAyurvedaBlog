 <?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Home Form Submission'; 
    $to = 'contact@amaranthaayurveda.org'; 
    $subject = 'Hello';
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '11') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    $alert='Your message has been sent! Please click the back button on your browser';
	} else { 
	    $alert='Something went wrong, go back and try again!'; 
	} 
    } else if ($_POST['submit'] && $human != '11') {
	$alert='You answered the anti-spam question incorrectly! Please click the back button on your browser';
    }
?>
<html>
    <body background="background-1.jpg">
        <h1 style="color:#053d0c" align="center" ><?php echo $alert; ?></h1>
    </body>
<html>