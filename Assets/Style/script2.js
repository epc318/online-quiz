
var scores = document.querySelector("#scores");
var BackToquiz = document.querySelector("#backBtn");
var clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var scoresStored = localStorage.getItem("scoresStored")
scoresStored = JSON.parse(scoresStored);

if (scoresStored !== null) {

    for (var i = 0; i < scores.length; i++) {

        var liElement = document.createElement("li");
        liElement.textContent = scoresStored[i].userInput + " " + scoresStored[i].score;
        console.log(liElement)
        scores.appendChild(liElement);
    }
};