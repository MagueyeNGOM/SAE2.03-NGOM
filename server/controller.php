<?php


require("model.php");

function readMoviesController(){
 
    $movies = getAllMovies();
    return $movies;
}

function readMovieDetailsController(){
    $id = $_REQUEST['id'];
    $movies = getMovieDetails($id);
    return $movies;
}

function addMoviesController(){
   
  $name = $_REQUEST['name'];
  $director = $_REQUEST['director'];
  $year = $_REQUEST['year'];
  $length = $_REQUEST['length'];
  $description = $_REQUEST['description'];
  $id_category = $_REQUEST['id_category'];
  $image = $_REQUEST['image'];
  $trailer = $_REQUEST['trailer'];
  $min_age = $_REQUEST['min_age'];

  $ok = addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  if ($ok != 0){
    return "Le film $name à été ajouté avec succès!";
  }
  else{
    return false;
  }
}
