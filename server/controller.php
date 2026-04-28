<?php


require("model.php");

/*

function readMoviesController(){
 
    $movies = getAllMovies();
    return $movies;
}
*/

function readMoviesController(){
    $movies = getAllMovies();
    $group = [];
    foreach($movies as $m){
      $categoryName = $m->nom_categorie;
      if (!isset($group[$categoryName])){
        $group[$categoryName] = [];
      }
        $group[$categoryName][] = $m;

    }
    return $group;
}

function readProfile(){
  $profile = getProfile();
  return $profile;
}


function readCategory(){
  $category = getCategory();
  return $category;
}


function readAge(){
  $age = getAge();
  return $age;
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


function addProfileController(){
  // On récupère le nom
  $name = $_REQUEST['name'];
  
  // On récupère l'âge (Attention : ton HTML envoie 'id_age' !)
  $age_restriction = $_REQUEST['age_restriction'];

  // L'avatar n'existe pas dans ton HTML, donc on force une case vide pour que MySQL soit content
  $avatar = ""; 

  // On envoie à la BDD
  $ok = addProfile($name, $avatar, $age_restriction);
  
  if ($ok != 0){
    return "Le profil $name a été ajouté avec succès !";
  }
  else{
    return false;
  }

}
