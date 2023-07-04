<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $telefono = $_POST['telefono'];

  // Configurar los detalles del correo electrónico
  $destinatario = 'tucorreo@example.com';
  $asunto = 'Nuevo formulario de contacto';

  // Construir el cuerpo del correo
  $mensaje = "Nombre: $nombre\n";
  $mensaje .= "Correo: $correo\n";
  $mensaje .= "Teléfono: $telefono\n";

  // Enviar el correo
  $enviado = mail($destinatario, $asunto, $mensaje);

  if ($enviado) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
} else {
  http_response_code(405);
}
?>
