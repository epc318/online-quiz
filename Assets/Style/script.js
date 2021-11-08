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
      intervalHold = setInt(function () {
          intervalSecs--;
          timeInt.textContent = "Time:" + intervalSecs;

          if (intervalSecs <= 0) {
              clearInt(intervalHold);
              quizEnd();
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

  choicePrompt.forEach(function (New) {
      var listChoice = document.createElement("li");
      listChoice.textContent = New;
      quizQuestions.appendChild(ulEl);
      ulEl.appendChild(listChoice);
      listChoice.addEventListener("click", (compare));
  })
}


function compare(event) {
  var userChoice = event.target;

  if (userChoice.matches("li")) {

      var divEl = document.createElement("div");
      divEl.setAttribute("id", "divEl");

      if (userChoice.textContent == quiz[quizIndex].answer) {
          score++;
          divEl.textContent = "Correct! The answer is: " + quiz[quizIndex].answer;
      } else {
          intervalSecs = intervalSecs - intervalPen;
          divEl.textContent = "Wrong! The correct answer is: " + quiz[quizIndex].answer;
      }
  }
  quizIndex++;

  if (quizIndex >= quiz.length) {
      quizEnd();
      divEl.innerHTML = "Great Job!" + " you got " + score + "/" + quiz.length + " Correct! " + "<br><br>" + "<ul>Quiz Answers: " + " alerts, parenthesis, all of the above, quotes, console log</ul>";
  } else {
      render(quizIndex);
  }
  quizQuestions.appendChild(divEl);
}

function quizEnd() {
  quizQuestions.innerHTML = "";
  timeInt.innerHTML = "";

  var h1El = document.createElement("h1")
  h1El.setAttribute("id", "h1El");
  h1El.textContent = "Quiz Over!";

  quizQuestions.appendChild(h1El);

  var pEl = document.createElement("p")
  pEl.setAttribute("id", "pEl");

  quizQuestions.appendChild(pEl);

  if (intervalSeconds >= 0) {
      var timeRemaining = intervalSecs;
      var p2El = document.createElement("p");
      clearInterval(intervalHold);
      pEl.textContent = "Your score is: " + timeRemaining;

      quizQuestions.appendChild(p2El);
  }
