<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Dirección de correo a donde se enviarán los datos
    $destinatario = "pagliaccicesar@gmail.com";
    $asunto = "Nuevo mensaje de contacto";

    // Crear el cuerpo del correo
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Mensaje: $mensaje\n";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    header("Location: /"); // Redirige a la página principal si se accede directamente
    exit;
}
?>