let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateOptionFile = await fetch("./component/NavBar/templateOption.html");
let templateOption = await templateOptionFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hHome, profilesArray) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);

  let optionsHtml = "";

  for(let i = 0; i < profilesArray.length; i++ ){
    let temp = templateOption;
    let profil = profilesArray[i];
    temp = temp.replaceAll("{{profileName}}", profil.name);
    temp = temp.replaceAll("{{age_restriction}}", profil.age_restriction);
    optionsHtml = optionsHtml + temp;
  }
  html = html.replace("{{optionsProfile}}", optionsHtml);
  html = html.replace("{{handlerProfile}}", "C.changeProfile()");

  return html;
};

export { NavBar };
