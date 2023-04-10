<?php 


  $email=$_POST["emailPHP"];
  $contact=$_POST["contactPHP"];
  $password=$_POST["passwordPHP"];
  $fname = $_POST["fnamePHP"];
  $lname = $_POST["lnamePHP"];
  $dob = $_POST["dob"];

  $conn = new mysqli('localhost', 'root', '', 'login1');
  if (!empty) {
    try
    {
        
        $sql="INSERT INTO `Users`(`LastName`, `contact`, `FirstName`, `email`, `password`,`dob`) VALUES ('$lname','$contact','$fname','$email','$password','$dob')";       
        $result=mysqli_query($conn,$sql);
        echo "$result";
    } catch (mysqli_sql_exception) {
      echo "user name already exists";
    }
  }
  else{
    echo '*Please enter all details';
  }
  mysqli_close($conn);
?>   