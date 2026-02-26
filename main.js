const cardImgNodes = document.querySelectorAll(".card-img");
const cardTitleNodes = document.querySelectorAll(".card-title");
const cardDateNodes = document.querySelectorAll(".card-text");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        for (let i=0; i<data.length; i++) {
            const currentData = data[i];
            cardImgNodes[i].src = currentData.url;
            cardTitleNodes[i].innerText = currentData.title;
            cardDateNodes[i].innerText = currentData.date;
        }

    })
    .catch(error => {
        console.error(error);
    });

const closeOverlayBtnNode = document.getElementById("close-overlay");
const overlayNode = document.getElementById("overlay");
const cardNodes = document.getElementsByClassName("card");

//Le immagini al click aprono l'overlay
for (const cardNode of cardNodes){
    cardNode.addEventListener("click", function(){
        manageOverlay(overlayNode);
    });
}

//Il bottone chiudi quando premuto chiude l'overlay
closeOverlayBtnNode.addEventListener("click", function(){
    manageOverlay(overlayNode);
})