<?php

if(empty($_POST['submit']))
{
echo "Form is not submitted!";
exit;
}
if(empty($_POST["name"]||empty($_POST["email"]))
{
echo "Please fill the form";
exit;
}

$name = $_POST["fullname"];
$email=$_POST["email"];
$message=$_POST["message"];

bool mail('kshitijtwr@gmail.com','New form submission',"New form submission: Name:$name,Email:$email",Message:$message));

header('Location: thank-you.html');
?>