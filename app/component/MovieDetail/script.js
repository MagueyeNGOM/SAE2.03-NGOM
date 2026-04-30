import { MovieFav } from "../MovieFav/script.js";

let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/MovieDetail/templateLi.html");
let templateLi = await templateLiFile.text();

let MovieDetail = {};

MovieDetail.format = function (data, f) {
  let html = templateLi;

  let chemin = "../server/images/" + data.image;
  html = html.replaceAll("{{image}}", chemin);
  html = html.replaceAll("{{itemTitle}}", data.name);
  html = html.replaceAll("{{itemDesc}}", data.description);
  html = html.replaceAll("{{itemRealisateur}}", data.director);
  html = html.replaceAll("{{itemYear}}", data.year);
  html = html.replaceAll("{{itemCategorie}}", data.id);
  html = html.replaceAll("{{itemAge}}", data.min_age);

  let embedUrl = data.trailer;
  if (embedUrl && embedUrl.includes("watch?v=")) {
    embedUrl = embedUrl.replace("watch?v=", "embed/");
  }
  html = html.replaceAll("{{itemTrailer}}", embedUrl);

  let finalHtml = template;
  finalHtml = finalHtml.replaceAll("{{movieDetailItems}}", html);
  finalHtml = finalHtml.replaceAll("{{movieFavButton}}", MovieFav.formatButton(data.id, f));

  return finalHtml;
};

export { MovieDetail };
