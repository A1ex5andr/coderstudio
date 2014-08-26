<?php
    foreach($_POST as $key => $value)
    {
        $value = trim($value);
        $value = addslashes(htmlspecialchars($value));
        $form[$key] = $value;
    }

function redirect($time, $link, $text, $exit)
    {
        print"<html><head><meta http-equiv=\"refresh\" content=\"".$time."; url=".$link."\"></head>
	        <body>
		        ".$text."<p align=center><a href=\"".$link."\">"."</a><br><br>
	        </body>
        </html>"; 
        if ($exit == '1'){exit;}
    }

function mailto($to,$subject,$message,$from)
    {
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= $from."\r\n";

        mail($to, $subject, $message, $headers);  
    }    

    if(($form['email'] != ''))
		{
			$message = '<html><head><title>CODERSTUDIO</title></head><body>
			<p>Вам надійшло замовлення:</p>
			Email: '. $form['email'] .'<br />
			</body></html>';

            $message2 = '<html><head><title>CODERSTUDIO</title></head><body>
            <p>Thank you, <br>
                we\'ll contact you asap.
            </p>
            <br />
            <br />
            Best regards, <br />
            CoderStudio
            </body></html>';

			$from = 'From: <info@coderstudio.net>' . "\r\n";

            mailto('info@coderstudio.net', 'CoderStudio', $message, $from);
			mailto($form['email'], 'CoderStudio', $message2,  $from);

            redirect('0', 'http://coderstudio.net/', '<!--h2 style="text-align: center; margin-top:100px;"> Thanks for registration!</h2-->', '1');
            exit;
        }
?>		

 