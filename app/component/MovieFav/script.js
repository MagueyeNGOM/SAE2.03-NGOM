let templateFile = await fetch("./component/MovieFav/template.html");
let template = await templateFile.text();

let MovieFav = {};

MovieFav.formatButton = function (movieId, f) {
  let html = template;
  html = html.replaceAll("{{movieId}}", movieId);
  
  if (f == true) {
    html = html.replaceAll("{{texteBouton}}", "Déjà dans vos favoris");
    html = html.replaceAll("{{etatBouton}}", "disabled");
  } else {
    html = html.replaceAll("{{texteBouton}}", "Ajouter aux favoris");
    html = html.replaceAll("{{etatBouton}}", ""); 
  }
  
  return html;
};

export { MovieFav };