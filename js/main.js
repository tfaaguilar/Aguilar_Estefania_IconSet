console.log('Javascript is running');

let vectoranchor = document.querySelector("#anchor");
let vectorbag = document.querySelector("#bag");
let vectormap = document.querySelector("#map");
let vectorplane = document.querySelector("#plane");
let vectorlifesaver = document.querySelector("#lsaver");
let vectortent = document.querySelector("#tent");
let vectorsandals = document.querySelector("#sandals");
let vectorisland = document.querySelector("#island");
let vectormountain = document.querySelector("#mountain");
let vectorship = document.querySelector("#ship");

function logID() {
    console.log('user clicked on this graphic', this.id);
}

vectoranchor.addEventListener('click', logID);
vectorbag.addEventListener('click', logID);
vectorisland.addEventListener('click', logID);
vectorlifesaver.addEventListener('click', logID);
vectormap.addEventListener('click', logID);
vectormountain.addEventListener('click', logID);
vectorplane.addEventListener('click', logID);
vectorsandals.addEventListener('click', logID);
vectorship.addEventListener('click', logID);
vectortent.addEventListener('click', logID);