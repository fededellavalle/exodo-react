<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");

session_start();
require 'db-connection.php';

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

$user = $_POST["user"] ?? "";
$password = $_POST["password"] ?? "";

$password_hashed = hash("sha256", $password);

$sql = "SELECT * FROM users WHERE user = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $user, $password_hashed);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $_SESSION["user"] = $user;
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "Usuario o contraseña incorrectos"]);
}
