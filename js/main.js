console.log('Javascript is running');

let vectorAnchor = document.querySelector("#vectorAnchor");
let vectorBag = document.querySelector("#vectorBag");
let vectorCoctail = document.querySelector("#vectorCoctail");
let vectorHotel = document.querySelector("#vectorHotel");
let vectorIsland = document.querySelector("#vectorIsland");
let vectorLifesaver = document.querySelector("#vectorLifesaver");
let vectorMap = document.querySelector("#vectorMap");
let vectorMountain = document.querySelector("#vectorMountain");
let vectorPlane = document.querySelector("#vectorPlane");
let vectorSandals = document.querySelector("#vectorSandals");
let vectorShip = document.querySelector("#vectorShip");
let vectorTent = document.querySelector("#vectorTent");

function logID() {
    console.log(this.id);
}

vectorAnchor.addEventListener('click', logID);
vectorBag.addEventListener('click', logID);
vectorCoctail.addEventListener('click', logID);
vectorHotel.addEventListener('click', logID);
vectorIsland.addEventListener('click', logID);
vectorLifesaver.addEventListener('click', logID);
vectorMap.addEventListener('click', logID);
vectorMountain.addEventListener('click', logID);
vectorPlane.addEventListener('click', logID);
vectorSandals.addEventListener('click', logID);
vectorShip.addEventListener('click', logID);
vectorTent.addEventListener('click', logID);