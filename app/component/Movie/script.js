let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateLiFile.text();

let Movie = {};

Movie.format = function (moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return "<p>Aucun film disponible pour le moment.</p>";
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

  let result = template.replaceAll("{{movieItems}}", html);
  return result;
};

export { Movie };
