<?php
  // Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $comment = filter_var($_POST["comment"], FILTER_SANITIZE_STRING);
  
    // Validate the form data
    if (empty($name) || empty($email) || empty($comment)) {
      echo "<p class='alert alert-danger'>Please fill in all fields.</p>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "<p class='alert alert-danger'>Invalid email address.</p>";
    } else {
      // Simpan komentar dalam file
      $filename = "komentar.txt";
      $content = "Nama: $name\nEmail: $email\nKomentar: $comment\n\n";
      file_put_contents($filename, $content, FILE_APPEND);
  
      // Display the form content
      echo "<h2>Form Content:</h2>";
      echo "<p>Name: $name</p>";
      echo "<p>Email: $email</p>";
      echo "<p>Comment: $comment</p>";
    }
  }

// Baca komentar dari file
$filename = "komentar.txt";
$content = file_get_contents($filename);
echo "<h2>Komentar:</h2>";
echo "<pre>$content</pre>";
?>
