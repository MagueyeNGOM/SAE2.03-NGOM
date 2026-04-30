let HOST_URL = "https://mmi.unilim.fr/~ngom14/SAE2.03-NGOM/";

let DataProfile = {};

DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "server/script.php?todo=readprofile");
  let data = await answer.json();
  return data;
};

DataProfile.g = function (profilesArray, id) {
  for (let i = 0; i < profilesArray.length; i++) {
    if (profilesArray[i].id == id) {
      return profilesArray[i].age_restriction;
    }
  }
  return 0;
};

export { DataProfile };
