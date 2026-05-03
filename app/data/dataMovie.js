// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~ngom14/SAE2.03-NGOM";

let DataMovie = {};

DataMovie.requestMovies = async function (age) {
  // fetch permet d'envoyer une requête HTTP à l'URL spécifiée.
  // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir.
  // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies&age=" + age);

  // answer est la réponse du serveur à la requête fetch.
  // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
  // Ces données (data) sont automatiquement converties en objet JavaScript.
  let data = await answer.json();
  // Enfin, on retourne ces données.
  return data;
};

DataMovie.requestMovieDetails = async function (id) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readmoviedetails&id=" + id);
  let data = await answer.json();
  return data;
}

DataMovie.requestFeatured = async function (age) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readfeatured&age=" + age);
  let data = await answer.json();
  return data;
}

DataMovie.addFavorite = async function (body) {
  let config = {
      method: "POST",
      body: body
  };
  let answer = await fetch(HOST_URL + "/server/script.php?todo=addfavorite", config);
  let data = await answer.json();
  return data;
};

DataMovie.requestFavorite = async function (id_profile) {
   let answer = await fetch(HOST_URL + "/server/script.php?todo=readfavorite&id_profile=" + id_profile);
  let data = await answer.json();
  return data;
}

DataMovie.isFavorite = async function (profileId, movieId) {
  let favorites = await DataMovie.requestFavorite(profileId);
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id == movieId) {
      return true;
    }
  }
  return false;
}

DataMovie.removeFavorite = async function (body) {
  let config = {
      method: "POST",
      body: body
  };
  let answer = await fetch(HOST_URL + "/server/script.php?todo=removefavorite", config);
  let data = await answer.json();
  return data;
};

DataMovie.requestTotProfil = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readtotprofil");
  let data = await answer.json();
  return data;
};

DataMovie.requestAvgFilm = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readavgfilm");
  let data = await answer.json();
  return data;
};

DataMovie.requestTotFilm = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readtotfilm");
  let data = await answer.json();
  return data;
};

DataMovie.requestMostAddedFilm = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readmostaddedfilm");
  let data = await answer.json();
  return data;
};

DataMovie.requestCatPop = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readcatpop");
  let data = await answer.json();
  return data;
};


export { DataMovie };
