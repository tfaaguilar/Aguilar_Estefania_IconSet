console.log('Javascript is running');

let vectorGraphic = document.querySelector("#vectorGraphic");

function logID() {
    console.log(this.id);
}

vectorGraphic.addEventListener('click', logID);
