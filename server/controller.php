<?php


require("model.php");

/*

function readMoviesController(){
 
    $movies = getAllMovies();
    return $movies;
}
*/

function readMoviesController(){
    $age = 0; 
    if (isset($_REQUEST['age'])) {
        $age = $_REQUEST['age'];
    }
    
    $movies = getAllMovies($age);
    
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
  if ($ok != 0){
    return "Le film $name à été ajouté avec succès!";
  }
  else{
    return false;
  }
}


function addProfileController(){
  $name = $_REQUEST['name'];
  
  $age_restriction = $_REQUEST['age_restriction'];

  $avatar = ""; 

  $ok = addProfile($name, $avatar, $age_restriction);
  
  if ($ok != 0){
    return "Le profil $name a été ajouté avec succès !";
  }
  else{
    return false;
  }

}


function editProfileController(){
  $id = $_REQUEST['id'];
  $name = $_REQUEST['name'];
  $age_restriction = $_REQUEST['age_restriction'];


  $ok = editProfile($id, $name, $age_restriction);
  
  if ($ok != 0){
    return "Le profil  a été modifié avec succès !";
  }
  else{
    return false;
  }

}
