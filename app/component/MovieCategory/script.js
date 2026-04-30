import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (categoryName, moviesArray) {
  let html = template;
  html = html.replaceAll("{{categoryName}}", categoryName);
  let moviesHtml = Movie.format(moviesArray);
  html = html.replaceAll("{{movieList}}", moviesHtml);

  return html;
};

MovieCategory.formatAll = function (group) {
  let finalHtml = "";
  for (let categoryName in group) {
    let categoryMovie = group[categoryName];
    finalHtml += MovieCategory.format(categoryName, categoryMovie);
  }
  return finalHtml;
};

export { MovieCategory };
