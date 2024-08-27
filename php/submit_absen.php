<?php
// File untuk menyimpan absen, misalnya dalam format teks
$file = 'absen.txt';

// Ambil data dari form
$name = isset($_POST['name']) ? $_POST['name'] : 'Anonim';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Buat format untuk menyimpan data
$data = "Nama: $name\nPesan: $message\n-----------------\n";

// Simpan data ke dalam file
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

// Redirect kembali ke halaman absen.php dengan parameter success
header("Location: ../absen.php?success=true");
exit();
?>

