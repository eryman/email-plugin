<?php

  if((isset($_POST['name']))&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 
    $to = $_POST['destination'];
    $subject = $_POST['subject'];
    $message = $_POST['message'] .'
        
    '.$_POST['name'] . '
    '.$_POST['company'] . '
    '.$_POST['phone'] . '
    '.$_POST['email'];
    mail($to, $subject, $message);

    echo json_encode(array('status' => 'success'));
  } else {
    echo json_encode(array('status' => 'error'));
  }

?>