

var highScore = document.querySelector("#highScores");
var BackToquiz = document.querySelector("#backBtn");
var clear = document.querySelector("#clearScore");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var storedScores = localStorage.getItem("storedScores")
storedScores = JSON.parse(storedScores);

if (storedScores !== null) {

    for (var i = 0; i < storedScores.length; i++) {

        var liElement = document.createElement("li");
        liElement.textContent = storedScores[i].userText + " " + storedScores[i].score;
        console.log(liElement)
        highScore.appendChild(liElement);
    }
};
