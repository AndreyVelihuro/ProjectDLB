<?php
    $login = filter_var(trim($_POST['full-name']), FILTER_SANITIZE_STRING);
    $Phone = filter_var(trim($_POST['phone-number']));
    $Email = filter_var(trim($_POST['Email']), FILTER_SANITIZE_STRING);
    $IdNumber = filter_var(trim($_POST['IdNumber']), FILTER_SANITIZE_STRING);
    $Password = filter_var(trim($_POST['Password']), FILTER_SANITIZE_STRING);
    
    if (mb_strlen($login) < 5 || mb_strlen($login) > 90){
        echo "Invalid login length";
        exit();
    }
    if (mb_strlen($Phone) == 9 ){
        echo "invalid phone number length";
        exit();
    }
    if (mb_strlen($Password) < 2 || mb_strlen($Password) > 6){
        echo "Invalid password length (2 to 6 characters)";
        exit(); 
    }

    
?>