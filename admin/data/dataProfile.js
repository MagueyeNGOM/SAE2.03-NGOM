let HOST_URL = ".";

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

DataProfile.editProfile = async function (fdd) {
        let config = {
        method: "POST",
        body: fdd
    };
    let answer = await fetch(HOST_URL + "server/script.php?todo=editprofile", config);
    let data = await answer.json();
    return data;
}

DataProfile.requestProfiles = async function () {
    let answer = await fetch(HOST_URL + "server/script.php?todo=readprofile");
    let data = await answer.json();
    return data;
}

export {DataProfile};
