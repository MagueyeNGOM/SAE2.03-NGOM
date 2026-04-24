<?php

require("controller.php");
require("logger.php");

if ( isset($_REQUEST['todo']) ){


  header('Content-Type: application/json');

 
  $todo = $_REQUEST['todo'];
  
  // Logs seulement pour les actions admin (addmovie)
  if ($todo === 'addmovie') {
    Logger::info('[ADMIN] Action reçue: ' . $todo);
  }

  switch($todo){
       
       case 'addmovies':
      $data = addMoviesController();
      break;
     
      case 'readmovies':
      $data = readMoviesController();
      break;
 
   
 

    default:
      echo json_encode('[error] Unknown todo value');
      http_response_code(400);
      exit();
  }

  if ($data===false){
    if ($todo === 'addmovie') {
      Logger::error('[ADMIN] Le contrôleur a retourné false');
    }
    echo json_encode('[error] Controller returns false');
    http_response_code(500);
    exit();
  }

  // Log de la réponse pour les actions admin
  if ($todo === 'addmovie') {
    Logger::info('[ADMIN] Succès: ' . json_encode($data));
  }
  
  echo json_encode($data);
  http_response_code(200);
  exit();
}

http_response_code(404);



?>