let templateFile = await fetch("./component/EditProfile/template.html");
let template = await templateFile.text();

let templateOptionFile = await fetch("./component/EditProfile/templateOption.html");
let templateOption = await templateOptionFile.text();

let EditProfile = {};

EditProfile.format = function (handler, agesArray, profilesArray) {
  let html = template;
  html = html.replace("{{handler}}", handler);
  let optionsHtml = "";
  for (let year of agesArray) {
    let option = templateOption;
    option = option.replace("{{idage}}", year.age);
    option = option.replace("{{minAge}}", year.age);
    optionsHtml += option;
  }

    html = html.replaceAll("{{optionAge}}", optionsHtml);


  let optionsHtmlProfiles = "";
  for (let prof of profilesArray) {
    let option = templateOption;
    option = option.replace("{{idage}}", prof.id); 
    option = option.replace("{{minAge}}", prof.name); 
    optionsHtmlProfiles += option;
  }
  html = html.replaceAll("{{optionProfiles}}", optionsHtmlProfiles);

  return html;
};

export { EditProfile };
