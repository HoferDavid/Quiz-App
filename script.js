let currentQuestion = 0;
let correctAnswers = 0;
let audioSuccess = new Audio("audio/powerup.mp3");
let audioFail = new Audio("audio/fail.mp3");


function init() {
  document.getElementById("questionAmount").innerHTML = questions.length;

  showQuestion();
}


function showQuestion() {
  if (gameIsOver()) {
    showEndscreen();
  } else {
    updateProgressBar();
    showNextQuestion();
  }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndscreen() {
    document.getElementById("questionBody").style = "display: none";
    document.getElementById("endScreen").style = "";
    document.getElementById("rightAnswers").innerHTML = correctAnswers;
    document.getElementById("headerImage").src = "img/trophy.png";
}


function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("currentQuestionAmount").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
}


function updateProgressBar() {
    let percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
    document.getElementById("progressBar").innerHTML = `${percent}%`;
    document.getElementById("progressBar").style.width = `${percent}%`;
}


function answer(clickedAnswer) {
  let question = questions[currentQuestion];
  let clickedAnswerNumber = Number(clickedAnswer.slice(-1));

  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  if (rightAnswerSelected(question, clickedAnswerNumber)) {
    document.getElementById(clickedAnswer).parentNode.classList.add("bg-success");
    audioSuccess.play();
    correctAnswers++;
  } else {
    audioFail.play();
    document.getElementById(clickedAnswer).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButton").disabled = false;
}


function rightAnswerSelected(question, clickedAnswerNumber) {
    return question["rightAnswer"] === clickedAnswerNumber;
}


function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextButton").disabled = true;
  resetAnswerButtons();
  showQuestion();
}


function resetAnswerButtons() {
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
}


function restartGame() {
  document.getElementById("headerImage").src = "img/img1.jpg";
  document.getElementById("questionBody").style = "";
  document.getElementById("endScreen").style = "display: none";
  currentQuestion = 0;
  correctAnswers = 0;

  init();
}
