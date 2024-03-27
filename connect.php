<?php

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$destination = $_POST['destination'];
#$date= date('Y-m-d',strtotime($_POST['date']));
$ppl = $_POST['ppl'];
$number = $_POST['number'];
$budget = $_POST['budget'];

//database connection
 $conn = new mysqli('localhost','root','','customer');
 if($conn->connect_error){
 	die('Connection Failed: ' .$conn->connect_error);

 }
 else
 {
 	$stmt = $conn->prepare("insert into registration(fullname, email, gender, destination, ppl, number, budget) VALUES (?, ?, ?, ?, ?, ?, ?)");
 	$stmt->bind_param("sssssii",$fullname, $email, $gender, $destination, $ppl, $number, $budget);
 	$stmt->execute();
	echo "<script> alert ('Your appointment has been registered');
	window.location.href='demo.html' </script>";

 	$stmt->close();
 	$conn->close();

 }
?>
