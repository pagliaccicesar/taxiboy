
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = isset($_POST['nombre']) ? filter_var($_POST['nombre'], FILTER_SANITIZE_STRING) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $mensaje = isset($_POST['mensaje']) ? filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING) : '';

    if (!empty($nombre) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "pagliaccicesar@gmail.com"; // Reemplaza con tu dirección de correo
        $subject = "Nuevo contacto";
        $message = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;
        $headers = "From: noreply@cesarpagliacci.com.ar\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
 
        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            error_log("Error al enviar el correo: " . print_r(error_get_last(), true));
            echo "error";
        }
    } else {
        echo "invalid";
    }
}
?>
