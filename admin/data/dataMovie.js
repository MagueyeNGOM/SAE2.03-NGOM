
// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~ngom14/SAE2.03-NGOM";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

 /**
     * Fetches data from the server based on the specified day.

     * 
     
     */
DataMovie.requestMovies = async function () {
  // fetch permet d'envoyer une requête HTTP à l'URL spécifiée.
  // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir.
  // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");

  // answer est la réponse du serveur à la requête fetch.
  // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
  // Ces données (data) sont automatiquement converties en objet JavaScript.
  let data = await answer.json();
  // Enfin, on retourne ces données.
  return data;
};


DataMovie.requestCategory = async function () {
  // fetch permet d'envoyer une requête HTTP à l'URL spécifiée.
  // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir.
  // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readcategory");

  // answer est la réponse du serveur à la requête fetch.
  // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
  // Ces données (data) sont automatiquement converties en objet JavaScript.
  let data = await answer.json();
  // Enfin, on retourne ces données.
  return data;
};


DataMovie.addmovies = async function (fdata) {

    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addfavorite", config);
    let data = await answer.json();
    return data;
}

export {DataMovie};





