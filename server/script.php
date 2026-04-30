<?php
// Activer le rapport d'erreurs PHP
error_reporting(E_ALL);

// Forcer l'affichage des erreurs à l'écran
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require("controller.php");

if ( isset($_REQUEST['todo']) ){

  header('Content-Type: application/json');
  $todo = $_REQUEST['todo'];

  switch($todo){
      
      case 'addmovies':
        $data = addMoviesController();
        break;
      
      case 'readmovies':
        $data = readMoviesController();
        break;
        
      case 'readmoviedetails':
        $data = readMovieDetailsController();
        break;

      case 'readcategory':
        $data = readCategory();
        break;

      case 'readage':
        $data = readAge();
        break;

      case 'addprofile':
        $data = addProfileController();
        break;

      case 'editprofile':
        $data = editProfileController();
        break;

      case 'readprofile':
        $data = readProfile();
        break;

      case 'addfavorite':
        $data = addFavoriteController();
        break;

      case 'readfavorite':
        $data = readFavoritesController();
        break;

      case 'removefavorite':
        $data = removeFavoriteController();
        break;

      default:
        echo json_encode('[error] Unknown todo value');
        http_response_code(400);
        exit();
  }

if ($data===false){
    http_response_code(500);
    echo json_encode('[error] Controller returns false');
    exit();
  }

  http_response_code(200);
  echo json_encode($data);
  exit();
}

http_response_code(404);

?>