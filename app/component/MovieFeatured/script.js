let templateFile = await fetch("./component/MovieFeatured/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/MovieFeatured/templateLi.html");
let templateLi = await templateLiFile.text();

let MovieFeatured = {};

MovieFeatured.format = function (moviesArray) {

  if (moviesArray.length === 0) {
    return "Aucun film mis en avant pour le moment.";
  }

  let html = "";
  for (let i = 0; i < moviesArray.length; i++) {
    let temp = templateLi;
    let film = moviesArray[i];
    let chemin = "../server/images/" + film.image;
    temp = temp.replaceAll("{{image}}", chemin);
    temp = temp.replaceAll("{{itemTitle}}", film.name);
    temp = temp.replaceAll("{{id}}", film.id);

    html = html + temp;
  }

  let result = template.replaceAll("{{featuredList}}", html);
  return result;
};

MovieFeatured.formatNoprof = function () {
  return "Veuillez vous connecter pour accéder à la liste de films";
}

export { MovieFeatured };
