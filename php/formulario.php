<?php
  
  $fecha = date("d-m-Y");
  $hora = date("H:i:s");
  $destino = "david.selt13113@gmail.com";
  $asunto = "Correo Web Lide";
  $desde = 'From: ' .$_POST[email];
  /*$comentario = "
  \n
  Nombre: $_POST[nombre]\n
  Telefono: $_POST[telefono]\n
  Email: $_POST[email]\n
  Consulta: $_POST[texto]\n
  Enviado: $fecha a las $hora\n
  \n";*/
  
   // Aquí se deberían validar los datos ingresados por el usuario
if(
	!isset($_POST['empresa']) ||
    !isset($_POST['nombre']) ||
    !isset($_POST['cargo']) ||
    !isset($_POST['mail']) ||
    !isset($_POST['asistente'])||
    !isset($_POST['mailasist'])||
    !isset($_POST['tel']))
     {

echo "<b>Ocurrio un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atras y verifique la informacion ingresada<br />";
die();
}


  $email_message = "Detalles del formulario de contacto:\n\n";
  $email_message .= "Empresa: " . $_POST['empresa'] . "\n";
  $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
  $email_message .= "Cargo: " . $_POST['cargo'] . "\n";
  $email_message .= "Mail: " . $_POST['mail'] . "\n\n";
  $email_message .= "Asistente: " . $_POST['asistente'] . "\n\n";
  $email_message .= "Mail asistente: " . $_POST['mailasist'] . "\n\n";
  $email_message .= "Teléfono: " . $_POST['tel'] . "\n\n";
  
  // Ahora se envía el e-mail usando la función mail() de PHP
  $headers = 'From: '.$desde."\r\n".
  'Reply-To: '.$desde."\r\n" .
  'X-Mailer: PHP/' . phpversion();  

  //Enviar el correo
	if(mail($destino, $asunto, $email_message, $headers)){
		echo "Correo enviado";
	}else{
		echo "Error de envio";
	}
  
?>