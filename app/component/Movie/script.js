let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateLiFile.text();

let Movie = {};

Movie.format = function (moviesArray) {
  let html = "";
  for (let i = 0; i < moviesArray.length; i++) {
    let temp = templateLi;
    let film = moviesArray[i];
    let chemin = "../server/images/" + film.image;
    temp = temp.replaceAll("{{image}}", chemin);
    temp = temp.replaceAll("{{itemTitle}}", film.name);
    html = html + temp; 
  }


  return html;
};

export { Movie };