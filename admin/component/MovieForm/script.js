let templateFile = await fetch('./component/MovieForm/template.html');
let template = await templateFile.text();

let templateLiFile = await fetch('./component/MovieForm/templateLi.html');
let templateLi = await templateLiFile.text();

let MovieForm = {};

MovieForm.format = function(handler, MovieCategory){
    let html = template;
    html = html.replace('{{handler}}', handler);
    let optionsHtml = "";
    for (let cat of MovieCategory) {
        let option = templateLi;
        option = option.replace('{{idcat}}', cat.id); 
        option = option.replace('{{MovieCategory}}', cat.name); 
        optionsHtml += option; 
    }
    
    html = html.replace('{{optioncat}}', optionsHtml);

    return html;
}





export { MovieForm };