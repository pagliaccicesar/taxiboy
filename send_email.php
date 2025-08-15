<?php
// Cargar PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Configuración de respuesta JSON
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capturar y sanitizar datos del formulario
    $nombre  = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $email   = isset($_POST['email']) ? trim($_POST['email']) : '';
    $mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';

    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo json_encode(['success' => false, 'error' => 'Campos incompletos']);
        exit;
    }

    // Crear instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP para Hostinger
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@taxiboy.com.ar'; // tu correo
        $mail->Password   = 'Mi$erere11'; // <-- reemplaza con tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Remitente y destinatario
        $mail->setFrom('info@taxiboy.com.ar', 'Formulario Web');
        $mail->addAddress('info@taxiboy.com.ar'); // destinatario       

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde el formulario de taxiboy.com.ar';
        $mail->Body    = "
            <h3>Nuevo mensaje recibido</h3>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Mensaje:</strong><br>{$mensaje}</p>
        ";
        $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\nMensaje:\n{$mensaje}";

        // Enviar
        if ($mail->send()) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Error al enviar']);
        }

    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
}
?>








<?php
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
//    $nombre = htmlspecialchars($_POST['nombre']);
//    $email = htmlspecialchars($_POST['email']);
//    $mensaje = htmlspecialchars($_POST['mensaje']);
    
//    $destinatario = "pagliaccicesar@gmail.com";
//    $asunto = "Nuevo mensaje de contacto";
    
//    $cuerpo = "Nombre: $nombre\n";
//    $cuerpo .= "Email: $email\n";
//    $cuerpo .= "Mensaje: $mensaje\n";

//    $headers = "From: $email\r\n";
//    $headers .= "Reply-To: $email\r\n";

//    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
//        echo json_encode(["success" => true]);
//    } else {
//        echo json_encode(["success" => false]);
//    }
//} else {
//    header("Location: /"); 
//    exit;
//}
?>