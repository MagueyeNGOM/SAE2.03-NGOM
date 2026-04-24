// Remplace "template.html" par "templateLi.html"
let templateFile = await fetch("./component/MovieDetail/templateLi.html"); 
let template = await templateFile.text();


let MovieDetail = {};


MovieDetail.format = function (data) {

    let html = template;

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

  return html;
};

export { MovieDetail };
