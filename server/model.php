<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer,
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "ngom14");
define("DBLOGIN", "ngom14");
define("DBPWD", "ngom14");


function getAllMovies($age){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT Movie.id, Movie.name, Movie.image, Category.name AS nom_categorie
            FROM Movie, Category 
            WHERE Movie.id_category = Category.id
            AND Movie.min_age <= :age";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':age', $age);
    $stmt->execute();
    
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}




function getProfile(){
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT id, name, age_restriction FROM Profile";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}



function getCategory(){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Category";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getAge(){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT age FROM AgeCategory ORDER BY age ASC";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}



function getMovieDetails($id){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Movie where id = :id";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_OBJ);
}

function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age)
            VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id_category', $id_category);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->execute();
    return $stmt->rowCount();
}

function addProfile( $name, $avatar, $age_restriction){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "INSERT INTO Profile (name, avatar, age_restriction)
            VALUES (:name, :avatar, :age_restriction)";
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':avatar', $avatar);
    $stmt->bindParam(':age_restriction', $age_restriction);

    $stmt->execute();
    return $stmt->rowCount();
}


function addFavorite($id_profile, $id_movie){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "INSERT INTO Favorite  (id_profile, id_movie)
            VALUES (:id_profile, :id_movie)";
    $stmt = $cnx->prepare($sql);

    $stmt->bindParam(':id_profile', $id_profile);
    $stmt->bindParam(':id_movie', $id_movie);

    $stmt->execute();
    return $stmt->rowCount();
}


function checkFavorite($id_profile, $id_movie){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "SELECT COUNT(*) FROM Favorite 
            WHERE id_profile = :id_profile 
            AND id_movie = :id_movie";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id_profile', $id_profile);
    $stmt->bindParam(':id_movie', $id_movie);

    $stmt->execute();
    return $stmt->fetchColumn();
}


function getFavorite($id_profile){

    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = " SELECT Movie.id, Movie.name, Movie.image, Category.name AS nom_categorie
            FROM Movie, Category, Favorite 
            WHERE Movie.id_category = Category.id
            AND Movie.id = Favorite.id_movie
            AND Favorite.id_profile = :id_profile";

    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id_profile', $id_profile);

    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function editProfile($id, $name, $age_restriction){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
 
    $sql = "UPDATE Profile 
            SET name = :name, age_restriction = :age_restriction 
            WHERE id = :id";

            
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':age_restriction', $age_restriction);

    $stmt->execute();
    return $stmt->rowCount();
}

