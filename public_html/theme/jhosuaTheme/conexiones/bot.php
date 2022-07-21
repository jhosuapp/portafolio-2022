<?php

$interes = $_POST['interes'];
$nombre = $_POST['nombreBotLast'];
$correo = $_POST['emailBotLast'];
$mensaje = $_POST['mensajeBotLast'];

echo json_encode([$interes, $nombre, $correo, $mensaje]);

?>