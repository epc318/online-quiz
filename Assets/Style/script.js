//created variable for question array
var questions = [
  {
    title: "What instrument does Richard Wakeman Play?",
    choices: ["Guitar", "Drums", "Keys/Synthesizer", "Bass"],
    answer: "Keys/Synthesizer"
},

  {
    title: "What year did Neil Young release his debut solo album?",
    choices: ["1970", "1985", "1968", "1973"],
    answer: "1968"
},

  {
    title: "What College did Walter Becker and Donald Fagen of Steely Dan meet in 1971?",
    choices: ["Univeristy of Minnesota", "UCLA", "Carthage College", "Bard College"],
    answer: "Bard College"
},

    title: "Who was the drummer for Toto?",
    choices: ["Jeff Pocaro", "John Bonham", "Rick Johnson", "Don Henley"],
    answer: "Jeff Pocaro"
},

  {
    title: "When were the Eagles formed",
    choices: ["1969", "1971", "1975", "1965"],
    answer: "1971"
},

    title: "Who is the vocalist for Creedance Clearwater Revival",
    choices: ["Mick Jagger", "Steve Lukather", "John Fogerty", "Byron Lee"],
    answer: "John Fogerty"
},

    title: "What was the best seeling album of 1972",
    choices: ["Harvest (Neil Young)", "The Rise and Fall of Ziggy Stardust and Spiders from Mars (David Bowie)", "Close to the Edge (Yes)", "Honky Chateau (Elton John)"],
    answer: "Harvest (Neil Young)"
},

    title: "What brand of drums did John Bonham prefer",
    choices: ["Mapex", "Yamaha", "Ludwig", "Gretsch"],
    answer: "Ludwig"
},

];

var score = 0;
var quizIndex = 0;

var intervalSecs = 75;
var intervalHold = 0;
var intervalPen = 5;

var timeInt = document.querySelector("#timeInt");
var quizQuestions = document.querySelector("#quizQuestions");


var startInt = document.querySelector(".start-btn");

// click listenter to start timer when button is clicked
startInt.addEventListener("click", function () {
  if (intervalHold === 0) {
      intervalHold = setInterval(function () {
          intervalSecs--;
          timeInt.textContent = "Time:" + intervalSecs;

          if (intervalSecs <= 0) {
              clearInterval(intervalHold);
              quizOver();
              timeInt.textContent = "Time's up!";
          }
      }, 1000);
  }
  render(quizIndex);
});

function render(quizIndex) {

  var ulEl = document.createElement("ul");
  quizQuestions.innerHTML = "";
  ulEl.innerHTML = "";

  for (var i = 0; i < quiz.length; i++) {
      var titlePrompt = quiz[quizIndex].title;
      var choicePrompt = quiz[quizIndex].choices;
      quizQuestions.textContent = titlePrompt;
  }

  choicePrompt.forEach(function (newItem) {
      var listChoices = document.createElement("li");
      listChoices.textContent = newItem;
      quizQuestions.appendChild(ulEl);
      ulEl.appendChild(listChoices);
      listChoices.addEventListener("click", (compare));
  })
}