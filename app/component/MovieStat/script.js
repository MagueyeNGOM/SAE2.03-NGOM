let templateFile = await fetch("./component/MovieStat/template.html");
let template = await templateFile.text();

let MovieStat = {};

MovieStat.format = function (data) {
  if (!data) {
    return "Aucune statistique disponible pour le moment.";
  }

  let html = template;

  html = html.replaceAll("{{totalCompte}}", data.totalCompte);
  html = html.replaceAll("{{moyenneFav}}", data.moyenneFav); 
  html = html.replaceAll("{{totalFilms}}", data.totalFilms);
  html = html.replaceAll("{{filmPopulaire}}", data.filmPopulaire);
  html = html.replaceAll("{{catPopulaire}}", data.catPopulaire);

  return html;
};

MovieStat.formatNoprof = function () {
  return "Veuillez vous connecter pour accéder aux statistiques.";
};

export { MovieStat };