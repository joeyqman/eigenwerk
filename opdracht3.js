let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var myCovers = []

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;


    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);

        var myCover = document.createElement('img');
        myCover.src = movies[i].cover;
        myCovers.append(myCover)
        document.querySelector('#fotoeen').appendChild(myCover);

    }

    for loop


}



/***************/
/* ronddraaiende blokken */
/***************/

const naarLinks = -90;
const naarRechts = 90;

/***************/
/* het draaien */
/***************/
function draaien(deButton, richting) {
    var hetArticle = deButton.parentNode,
        huidigeArticleHoek,
        nieuweArticleHoek;

    huidigeArticleHoek = getComputedStyle(hetArticle).getPropertyValue("--articleHoek");
    huidigeArticleHoek = parseInt(huidigeArticleHoek);

    nieuweArticleHoek = huidigeArticleHoek + richting;
    hetArticle.style.setProperty("--articleHoek", nieuweArticleHoek);
}

/***********/
/* buttons */
/***********/
var buttonVierZijdenLinks = document.querySelector(".vierZijden button:first-of-type");
buttonVierZijdenLinks.addEventListener("click", function () {
    draaien(this, naarLinks);
});
var buttonVierZijdenRechts = document.querySelector(".vierZijden button:last-of-type");
buttonVierZijdenRechts.addEventListener("click", function () {
    draaien(this, naarRechts);
});

var buttonVierZijdenMetDakLinks = document.querySelector(".vierZijdenMetDak button:first-of-type");
buttonVierZijdenMetDakLinks.addEventListener("click", function () {
    draaien(this, naarLinks);
});
var buttonVierZijdenMetDakRechts = document.querySelector(".vierZijdenMetDak button:last-of-type");
buttonVierZijdenMetDakRechts.addEventListener("click", function () {
    draaien(this, naarRechts);
});
