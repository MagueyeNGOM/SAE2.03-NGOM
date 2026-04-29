let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let templateOptionFile = await fetch(
  "./component/ProfileForm/templateOption.html",
);
let templateOption = await templateOptionFile.text();

let ProfileForm = {};

ProfileForm.format = function (handler, agesArray) {
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
  return html;
};

export { ProfileForm };
