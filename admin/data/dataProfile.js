let HOST_URL = "https://mmi.unilim.fr/~ngom14/SAE2.03-NGOM/";

let DataProfile = {};


DataProfile.requestAge = async function () {
    let answer = await fetch(HOST_URL + "server/script.php?todo=readage");
    let data = await answer.json();
    return data;
}


DataProfile.addProfile = async function (fdata) {

    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "server/script.php?todo=addprofile", config);
    let data = await answer.json();
    return data;
}

export {DataProfile};
