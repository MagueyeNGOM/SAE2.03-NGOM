let templateFile = await fetch("./component/MovieStat/template.html");
let template = await templateFile.text();

let MovieStat = {};

MovieStat.format = function (totProfil, avgFilm, totFilm, mostAdded, catPop) {

  let html = template;

  html = html.replaceAll("{{totalCompte}}", totProfil.total_compte);
  html = html.replaceAll("{{moyenneFav}}", avgFilm["AVG(nb_fav)"]);
  html = html.replaceAll("{{totalFilms}}", totFilm.total_films);
  html = html.replaceAll("{{filmPopulaire}}", mostAdded.total_fav);
  html = html.replaceAll("{{catPopulaire}}", catPop.category_name);

  return html;
};

MovieStat.formatNoprof = function () {
  return "Veuillez vous connecter pour accéder aux statistiques.";
};

export { MovieStat };
