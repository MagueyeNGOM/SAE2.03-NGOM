let templateFile = await fetch("./component/MovieFav/template.html");
let template = await templateFile.text();

let MovieFav = {};

MovieFav.formatButton = function (movieId) {
  let html = template;
  html = html.replaceAll("{{movieId}}", movieId);
  return html;
};

export { MovieFav };