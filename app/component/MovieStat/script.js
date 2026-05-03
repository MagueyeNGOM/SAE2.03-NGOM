let templateFile = await fetch("./component/MovieStat/template.html");
let template = await templateFile.text();

let MovieStat = {};

MovieStat.format = function (data) {
  if (!data) {
    return "Aucune statistique disponible pour le moment.";
  }

  let html = template;

  // On remplace les étiquettes par les données reçues de ton fetch PHP (qui sera fait dans l'index)
  // L'astuce Object.values()[0] permet de contourner les noms de colonnes SQL générés par PDO
  html = html.replaceAll("{{totalCompte}}", Object.values(data.total_compte)[0]);
  html = html.replaceAll("{{moyenneFav}}", parseFloat(Object.values(data.moyenne_fav)[0]).toFixed(1));
  html = html.replaceAll("{{totalFilms}}", Object.values(data.total_films)[0]);
  html = html.replaceAll("{{filmPopulaire}}", Object.values(data.film_populaire)[0]);
  html = html.replaceAll("{{catPopulaire}}", Object.values(data.cat_populaire)[0]);

  return html;
};

MovieStat.formatNoprof = function () {
  return "Veuillez vous connecter pour accéder aux statistiques.";
};

export { MovieStat };